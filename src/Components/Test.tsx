import { Component, Vue } from "vue-facing-decorator";

@Component
export default class Test extends Vue {
  render() {
    return (
      <div
        onMouseenter={(e) => {
          console.log(e);
        }}
      >
        {() => {
          let content = "";
          for (let i = 0; i < 5; i++) {
            content += "\n测试";
          }
          return content;
        }}
      </div>
    );
  }
}
