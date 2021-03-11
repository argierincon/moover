<template>
  <section class="section-banner">
    <div class="container-banner">
      <img
        class="container-banner__img"
        src="~/assets/img/banner.png"
        alt="Personas de caricatura cargando paquetes en un camión"
      />
    </div>
    <div class="container-slogan">
      <h1 class="slogan">
        Ofrecemos <span>el mejor servicio de traslado de paquetes</span>.
      </h1>
      <p>
        Realizamos los traslados de manera segura y sanitizada.
      </p>
      <MainButton textBtn="CONTÁCTANOS" />
    </div>
  </section>
</template>

<script>
import MainButton from "../utils/MainButton";

export default {
  components: {
    MainButton,
  },
};
</script>

<style lang="sass" scoped>
.container-banner
  display: flex
  justify-content: flex-end

.container-banner__img
  width: 80%

.container-slogan
  margin: 25px 40px 40px

  p
    font-family: poppins
    font-weight: 300
    margin-top: 20px
    font-size: 14px

.slogan
  @include title
  font-size: 1.6rem

  span
    @include title
    color: $color-primary

@media ( min-width: 768px) and ( max-width: 768px )
  .container-slogan
    width: 55%

@media (min-width: 768px)
  .container-slogan
    margin: 40px

@media ( min-width: 1024px )
  .section-banner
    display: flex
    flex-direction: row-reverse
    align-items: center

  .container-banner__img
    width: 100%

  .container-slogan
    width: 72%
    transform: translate(40px, 80px)

    p
      font-size: 18px

  .slogan
    font-size: 2rem

@media (min-width: 1440px)
  .container-banner__img
    width: 95%

  .container-slogan
    width: 36%
    transform: translate(80px, 80px)

  .slogan
    font-size: 2.5rem
</style>
