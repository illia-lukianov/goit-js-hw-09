import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const a=document.querySelector(".feedback-form");let e={email:"",message:""};a.addEventListener("input",t=>{e[t.target.name]=t.target.value;const m=JSON.stringify(e);localStorage.setItem("feedback-form-state",m)});a.addEventListener("submit",t=>{t.preventDefault(),e.email.trim()===""||e.message.trim()===""?alert("Fill please all fields"):(console.log(e),localStorage.removeItem("feedback-form-state"),e.email="",e.message="",a.reset())});document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("feedback-form-state")!==null&&(e.email=JSON.parse(localStorage.getItem("feedback-form-state")).email,e.message=JSON.parse(localStorage.getItem("feedback-form-state")).message,a.querySelector('input[name="email"]').value=JSON.parse(localStorage.getItem("feedback-form-state")).email,a.querySelector('textarea[name="message"]').value=e.message=JSON.parse(localStorage.getItem("feedback-form-state")).message)});
//# sourceMappingURL=2-form.js.map
