import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const t=document.querySelector(".feedback-form");let e={email:"",message:""};t.addEventListener("input",a=>{e[a.target.name]=a.target.value;const r=JSON.stringify(e);localStorage.setItem("feedback-form-state",r)});t.addEventListener("submit",a=>{a.preventDefault(),e.email.trim()===""||e.message.trim()===""?alert("Fill please all fields"):(localStorage.removeItem("feedback-form-state"),e.email="",e.message="",t.reset())});document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("feedback-form-state")!==null&&(t.querySelector('input[name="email"]').value=JSON.parse(localStorage.getItem("feedback-form-state")).email,t.querySelector('textarea[name="message"]').value=e.message=JSON.parse(localStorage.getItem("feedback-form-state")).message)});
//# sourceMappingURL=2-form.js.map
