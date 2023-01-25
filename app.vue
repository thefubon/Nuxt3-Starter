<script setup>
  // JSON Massive
  import listData from '/data/list'
  const list = ref(listData);

  // JS Massive
  import data from '/data/products'
  const products = ref(data);

  // Sort
  const sortBy = ref("");
  const order = ref("asending");
  const name = ref("");

  // Search Filter
  const filteredProducts = computed(() => {
    if (name.value) {
      return [...products.value].filter((item) => {
        return name.value
        .toLocaleLowerCase()
        .split(" ")
        .every((v) => item.name.toLocaleLowerCase().includes(v));
      });
    } else {
      return products.value;
    }
  });
  
  // Sort Filter
  const dynamicSort = (property) => {
    let sortOrder = 1;
    if(property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return (a,b) => {
      const result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  };

  const sortProducts = () => {
    if(order.value == 'deasending') {
      products.value.sort(dynamicSort('-' + sortBy.value))
    } else {
      products.value.sort(dynamicSort(sortBy.value))
    }
  };

  watch(sortBy, () => {
    sortProducts();
  });
  watch(order, () => {
    sortProducts();
  });

  useHead({
    titleTemplate: '%s | App Page',
  })
</script>
  
<template>
  <div class="container">
    <NuxtLoadingIndicator />
    <Header />
    <NuxtPage />

    <div :id="'id-' + index + 1" v-for="(item,index) in list" :key="index">
      <span v-if="item.new">New</span>
      {{item.title}}
      {{item.description}}
    </div>
    

    <div class="">
      <input type="text" placeholder="Search..." v-model="name" class="p-2 border">

      <fieldset>
        <legend>Sort By</legend>

        <input id="draft1" class="peer/draft" type="radio" name="status" value="name" v-model="sortBy" checked />
        <label for="draft1" class="peer-checked/draft:text-sky-500">Name</label>

        <input id="published1" class="peer/published" type="radio" name="status" value="price" v-model="sortBy" />
        <label for="published1" class="peer-checked/published:text-sky-500">Price</label>
      </fieldset>

      <fieldset>
        <legend>Order</legend>

        <input id="draft2" class="peer/draft" type="radio" name="status" value="asending" v-model="order" checked />
        <label for="draft2" class="peer-checked/draft:text-sky-500">asending</label>

        <input id="published2" class="peer/published" type="radio" name="status" value="deasending" v-model="order" />
        <label for="published2" class="peer-checked/published:text-sky-500">deasending</label>
      </fieldset>

      <div v-for="(product, i) in filteredProducts" :key="i">
        <div class=" capitalize">{{ product.name }}</div>
        {{ product.price }}
      </div>
    </div>

  </div>
</template>