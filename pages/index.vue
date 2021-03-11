<template>
  <div>
    <Banner />
    <AboutUs />
    <HowItWorks />
  </div>
</template>

<script>
import ContactUs from "../components/home/ContactUs";
import Banner from "../components/home/Banner";
import AboutUs from "../components/home/AboutUs";
import HowItWorks from "../components/home/HowItWorks";

export default {
  components: {
    Banner,
    AboutUs,
    HowItWorks,
  },
};
</script>
