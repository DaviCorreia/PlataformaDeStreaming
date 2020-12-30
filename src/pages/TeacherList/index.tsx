import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';


import './styles.css';


function TeacherList(){
    return (
        <div id="page-teacher-list" className="container">

           <PageHeader title="Esses são os proffys disponíveis">

               <form action="" id="search-teachers">

                 <div className="input-block">
                     <label htmlFor="subject">Matéria</label>
                     <input type="text" id="subject"/>
                 </div>

                 <div className="input-block">
                     <label htmlFor="wek_day">Dia da semana</label>
                     <input type="text" id="wek_day"/>
                 </div> 

                 <div className="input-block">
                     <label htmlFor="time">Hora</label>
                     <input type="text" id="time"/>
                 </div> 

               </form>

           </PageHeader>

           <main>
               <TeacherItem/>
               <TeacherItem/>
               <TeacherItem/>
               <TeacherItem/>
           </main>

        </div>
    )
}
export default TeacherList;