import Son from "@/Components/Son";
import { Component, Vue } from "vue-facing-decorator";

@Component
export default class Index extends Vue {
  loading = true;

  created() {
    setTimeout(() => {
      this.loading = false;
      setTimeout(() => {
        this.show = false;
      }, 3000);
    }, 1000);
  }

  show = true;
  render() {
    return (
      this.show && (
        <Son v-loading={this.loading} element-loading-text="测试..." element-loading-background="transparent"></Son>
      )
    );
  }
}
