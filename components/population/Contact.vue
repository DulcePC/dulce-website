<template>
  <section class="bg-white pb-48">
    <div class="container">
      <h2 class="md:left-style md:m-0 mx-auto">
        Contact
      </h2>
      <form class="mt-12">
        <div class="grid md:grid-cols-2 grid-cols-1 md:gap-11 gap-4 md:mb-9 mb-4">
          <input type="text" class="form-control" placeholder="Name">
          <input type="text" class="form-control" placeholder="SUBJECT">
        </div>
        <div class="grid grid-cols-1">
          <textarea class="form-control" placeholder="MESSAGE" />
        </div>
        <div class="flex justify-end md:mt-9 mt-4">
          <atoms-button class="lg:min-w-[180px]">
            send
          </atoms-button>
        </div>
      </form>
    </div>
  </section>
</template>