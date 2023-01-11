<template>
  <li
    :class="itemClasses"
    class="cursor-pointer hover:shadow-md"
    v-for="i in [
      'Mailingboss',
      'Builderall Builder',
      'Booking',
      'BuilderallZap',
      'WordPress PRO',
      'Webinar',
      'Elearning',
      'Quiz',
      'Delivery',
      'Mailingboss',
      'Directory',
      'Support System',
    ]"
  >
    <img
      :width="img"
      src="https://office.builderall.com/internacional/public/office5/img/tools/hover/builderall_builder.svg"
    />
    <span class="text-center font-semibold leading-1">{{ i }}</span>
  </li>
</template>
<script>
export default {
  props: {
    itemClasses: String,
    img: Number,
  }
}
</script>