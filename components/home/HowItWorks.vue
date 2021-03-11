<template>
  <section class="section-how-it-works">
    <img src="~/assets/img/shape-car-2.png" alt="" />
    <div class="container-how-it-works">
      <h4>
        ¿Cómo funciona?
      </h4>
      <p>
        Empieza a colaborar en Moover y gana dinero al momento. Acércate a tus
        objetivos.
      </p>
      <ul>
        <li>Primero, escoge un bloque.</li>
        <p>
          Ingresa Mover, busca bloques en tu ciudad y selecciona el que se
          ajuste a tu horario y disponibilidad.
        </p>
        <li>Después, haz la entrega.</li>
        <p>
          dDberás dirigirte a la estación de recogida para recoger los paquetes
          a la hora indicada.
        </p>
        <li>Por último, el pago de tu bloque.</li>
        <p>
          Una vez que el bloque de entrega ha concluido, sólo queda recibir el
          pago.
        </p>
      </ul>
      <SecondaryButton textBtn="Conoce más" type="purple"/>
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
.section-how-it-works

  h4
    @include subtitle
    color: $color-primary

  img
    width: 90%
    margin-left: 10%

.container-how-it-works
  @include flexColumnCenter
  margin: 0 40px
  transform: translateY(-120px)

  ul
    margin: 20px 30px

    li
      list-style-image: url('./assets/img/road.png')
      margin-bottom: 10px
      color: #505AF6
      font-weight: 500

    p
      margin-bottom: 10px

@media (min-width: 768px)
  .section-how-it-works
    margin: 100px 0 60px 40px
    display: flex
    flex-direction: row-reverse
    align-items: center
    justify-content: space-between

    img
      width: 55%
      margin-left: 5%

  .container-how-it-works
    margin: 0
    transform: none

@media (min-width: 1024px)
  .section-how-it-works
    font-size: 18px
    img
      width: 45%

  .container-how-it-works
    width: 40%
    transform: translateX(60px)

@media (min-width: 1440px)
  .section-how-it-works
    font-size: 20px
  
  .container-how-it-works
    width: 32%
    transform: translateX(140px)
</style>
