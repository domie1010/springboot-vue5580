const base = {
    get() {
        return {
            url : "http://localhost:8080/weilexiaoyuan/",
            name: "weilexiaoyuan",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/weilexiaoyuan/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "微乐校园"
        } 
    }
}
export default base
