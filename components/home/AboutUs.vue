<template>
  <section class="section-about-us">
    <img src="~/assets/img/shape-car.png" alt="" />
    <div class="container-about-us">
      <h4>
        ¿Por qué Moover?
      </h4>
      <p>
        Es una gran oportunidad para ganar dinero extra, con Moover uedes
        incrementar tus ingresos accediendo a bloques en tu tiempo libre.
      </p>
      <ul>
        <li>Fijas tu propio horario cuando mejor te convenga.</li>
        <li>Cobras por bloques realizados.</li>
        <li>No hay obligación de mínimo de bloques.</li>
        <li>Podrás seleccionar bloques en tu ciudad.</li>
        <li>Sabrás de antemano la duración e ingreso del bloque.</li>
        <li>Una vez culminado el bloque de entrega recibirás el pago.</li>
      </ul>
      <SecondaryButton textBtn="Quiero ser Moover" />
    </div>
  </section>
</template>

<script>
import SecondaryButton from "../utils/SecondaryButton";
export default {
  components: {
    SecondaryButton,
  },
};
</script>

<style lang="sass" scoped>
.section-about-us
  margin: 60px 40px
  display: flex
  flex-direction: column
  align-items: center

  img
    width: 80%

.container-about-us
  @include flexColumnCenter
  h4
    @include subtitle
    color: $color-secundary

  ul
    margin: 20px 30px

    li
      margin-bottom: 10px
      list-style-image: url('./assets/img/check.png')

@media (min-width: 768px)
  .section-about-us
    align-items: initial
    img
      width: 50%
      margin: auto auto 30px

  .container-about-us
    display: initial
    width: 70%

@media (min-width: 1024px)
  .section-about-us
    flex-direction: row
    align-items: center
    font-size: 18px

    img
      width: 32%
      margin: 0 8% 0 16%

  .container-about-us
    width: 40%

@media (min-width: 1440px)
    .section-about-us
      font-size: 20px
      img
        width: 26%
        margin: 0 8% 0 22%


    .container-about-us
      width: 30%
</style>
