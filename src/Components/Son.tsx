import { ElButton } from "element-plus";
import { Component, Vue } from "vue-facing-decorator";

@Component
export default class Son extends Vue {
  data = [
    {
      label: "测试",
      value: "测试",
    },
  ];

  val = "";

  show = true;

  created() {
    setTimeout(() => {
      this.show = !this.show;
    }, 1000);
  }
  render() {
    return <ElButton loading={this.show}>按钮</ElButton>;
  }
}
