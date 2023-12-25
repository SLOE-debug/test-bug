import { Component, Vue } from "vue-facing-decorator";
import Son from "./Son";

@Component
export default class Test extends Vue {
  render() {
    return <Son></Son>;
  }
}
