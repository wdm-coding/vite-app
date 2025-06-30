import { defineComponent } from "vue";
import avator from '@/assets/avator.jpeg'
export default defineComponent({
  setup(){
    return ()=>(
      <div className="vue_jsx_app">
        <h1>Hello vue-jsx</h1>
        <img src={avator} alt="avator" />
      </div>
    )
  }
})