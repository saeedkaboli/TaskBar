import React, { Component} from 'react'
import "./Section.css";
import Task from './Tasks/Task';
import One from "./img/1.jpg";
import Swal from '../../../node_modules/sweetalert2/dist/sweetalert2'

export default class Section extends Component {
    state = {
        Task: []
      };
    render() {
      const Length=this.state.Task.length;
        const HandlerAdding =()=>{
            const Html=window.document.querySelector("html>body");
            Html.style.overflow= "hidden";
            const NewEl=document.createElement("div");
            NewEl.id="New";
            Html.appendChild(NewEl)
            const Pop=document.getElementById("Pop");
            Pop.style.display="block";
            setTimeout(()=>{
                Pop.style.width="50%";
                Pop.style.height="70vh";
            },50)
            
                }
         const HandlerBack =()=>{
                    const pop=document.getElementById("Pop");
                    pop.style.display="none"
                    pop.style.width="10%";
                    pop.style.height="20vh";
                    const newEl=document.getElementById("New");
                    const html=window.document.querySelector("html>body");
                    newEl.remove();
                    html.style.overflow= "auto";
                    
                }

         const HandlerOkData = () => {
                    const N_Task = document.getElementById("nTask").value;
                    const T_Task = document.getElementById("tTask").value;
                    const P_Task = document.getElementById("pTask").value;
                  

                    if(N_Task==="" || T_Task==="" || P_Task===""){
                        Swal.fire({
                            position: 'top-end',
                            icon: 'error',
                            title: 'اومدی نسازی بلا گرفته',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                    else{
                        const Toast = Swal.mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                              toast.addEventListener('mouseenter', Swal.stopTimer)
                              toast.addEventListener('mouseleave', Swal.resumeTimer)
                            }
                          })
                          
                          Toast.fire({
                            icon: 'success',
                            title: 'دمت گرم همه چی ردیفه'
                          })
                        const NewData={name:`${N_Task}`,time:`${T_Task}`,img:`${P_Task}`,id:Number(`${this.state.Task.length+1}`)};
                        this.state.Task.push(NewData);
                        
                       this.setState({Task:this.state.Task});
                        HandlerBack();
                    }
                  };

         const HandlerDelete=(id)=>{
             //--------------------------
             Swal.fire({
                title: 'پاکش کنی',
                text: "داری شوخی میکنی باهام",
                icon: 'warning',
                // showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'آره تصمیم و گرفتم'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'حذف شد',
                    'دلت خنک شد...',
                    'success'
                  )
                }
              })

             //----------------------------

             const D=this.state.Task.filter((F)=> F.id!==id);
             this.setState({Task:D});
         }
        return (
            <div id='Section'>
           
               <div className='bg-dark' id='HeaderSection'>
                 <div id="HeaderSectionContainer">
                 <div id="HeaderSectionRow">
                 <button className='btn btn-danger' onClick={HandlerAdding}><i className="bi bi-file-earmark-plus"></i></button>
               <h4 className='badge  badge-info mt-2'>تعداد تسک ها :{Length}</h4>
                 </div>
                
                 </div>
              
               </div>
                <div id="Pop">
                    <button id='Back' className='btn btn-danger m-2' onClick={HandlerBack}><i className="bi bi-x-lg"></i></button>
                    <ul id='Parent-Data-Task'>
                        <li>نام تسک:</li>
                        <li><input type="text" id='nTask' className="form-control" /></li>
                        <li>ساعت تسک:</li>
                        <li><input type="text" id='tTask' className="form-control" /></li>
                        <li>عکس تسک:</li>
                        <li><input type="file" id='pTask' className="form-control"/></li>

                    </ul>
                   <ul id='Parent-Data-Ok'>
                   <button className='btn btn-warning' onClick={HandlerOkData}>تایید اطلاعات</button>
                   </ul>
                    
                    </div>

                    {/* this is Box */}
                   <div className="Task-Container">
                   <div className="Task-row">
                   {this.state.Task.map( (E) => <Task name={E.name} time={E.time} img={One} key={E.id} EventDelete={()=>{HandlerDelete(E.id)}}/>)}
                   </div>
                   </div>
            </div>
        )
    }
}
