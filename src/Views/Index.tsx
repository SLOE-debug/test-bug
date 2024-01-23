import { ElButton, ElForm, ElFormItem, ElInput } from "element-plus";
import { Component, Vue } from "vue-facing-decorator";

@Component
export default class Index extends Vue {
  val1 = "";
  val2 = "";

  Submit() {
    setTimeout(() => {
      this.$router.push("/About");
    }, 1000);
  }

  render() {
    return (
      <div
        onKeydown={(e) => {
          if (e.key == "Enter") this.Submit();
        }}
      >
        <ElForm labelWidth={"120px"} style={{ width: "800px" }}>
          <ElFormItem label="用户名">
            <ElInput v-model={this.val1}></ElInput>
          </ElFormItem>
          <ElFormItem label="密码">
            <ElInput v-model={this.val2}></ElInput>
          </ElFormItem>
          <ElFormItem>
            <ElButton type="primary" onClick={this.Submit}>
              登录
            </ElButton>
          </ElFormItem>
        </ElForm>
      </div>
    );
  }
}
