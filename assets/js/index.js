let nameUser;
nameUser = localStorage.getItem("login");
function addName(){
    if (document.getElementById("textReg").value!=""){
        nameUser=document.getElementById("textReg").value;
        localStorage.setItem('login',nameUser);
    }
    setName();
}
function setName(){
    document.getElementById("account").innerHTML="Пользователь: "+nameUser;
    if (nameUser!=""){
        alert("Добро пожаловать "+nameUser);
    }
    else{
        alert("Введите не пустое значение");
    }
}

let arrOption=[];
arrOption[0]={
    question:'1 Чему бы вы хотели научиться больше всего при поступлении в Университет?',
    answer1:'Творчество',
    answer2:'Медиа',
    answer3:'Программирование',
    answer4:'Разработка приложений',
    listPoint1:[4,5,6],
    listPoint2:[0,1,2,3],
    listPoint3:[0,1,2,3],
    listPoint4:[0,1,2,3]
};
arrOption[1]={
    question:'2 Вас интересует возможность заочного образования?',
    answer1:'Да интересует',
    answer2:'Скорее да',
    answer3:'Нет необходимости',
    answer4:'Не интересует',
    listPoint1:[0,1],
    listPoint2:[0,1],
    listPoint3:[2,3],
    listPoint4:[2,3]
};
arrOption[2]={
    question:'3 Что из перечисленного вам нравится больше?',
    answer1:'Виртуальная дополнительная реальность',
    answer2:'Математические основы информатики',
    answer3:'Прикладное программирование',
    answer4:'Проектирование',
    listPoint1:[0],
    listPoint2:[1],
    listPoint3:[2],
    listPoint4:[3]
};
arrOption[3]={
    question:'4 Вас интересует возможность альтернативных профилей на одном направлении?',
    answer1:'Да интересует',
    answer2:'Скорее да',
    answer3:'Нет необходимости',
    answer4:'Не интересует',
    listPoint1:[0,1],
    listPoint2:[0,1],
    listPoint3:[2,3],
    listPoint4:[2,3]
};
arrOption[4]={
    question:'5 Вас интересует большое количество бюджетных мест?',
    answer1:'Да интересует',
    answer2:'Скорее да',
    answer3:'Нет необходимости',
    answer4:'Не интересует',
    listPoint1:[0],
    listPoint2:[0,2],
    listPoint3:[1,2,3],
    listPoint4:[1,3]
};
arrOption[5]={
    question:'6 Вас интересует большое количество изучаемых технологий?',
    answer1:'Да интересует',
    answer2:'Скорее да',
    answer3:'Нет необходимости',
    answer4:'Не интересует',
    listPoint1:[0],
    listPoint2:[0,1,2],
    listPoint3:[1,3],
    listPoint4:[3]
};
arrOption[6]={
    question:'7 Какие из этих технологий вы больше предпочитаете изучить?',
    answer1:'Разработка компьютерных игр',
    answer2:'Администрирование операционных систем',
    answer3:'Моделирование информационных процессов',
    answer4:'Управление программными проектами',
    listPoint1:[0],
    listPoint2:[1],
    listPoint3:[2],
    listPoint4:[3]
};
arrOption[7]={
    question:'2 Вас интересует возможность заочного образования?',
    answer1:'Да интересует',
    answer2:'Скорее да',
    answer3:'Нет необходимости',
    answer4:'Не интересует',
    listPoint1:[4,6],
    listPoint2:[4,6],
    listPoint3:[5,6],
    listPoint4:[5]
};
arrOption[8]={
    question:'3 Вас интересует возможность альтернативных профилей на одном направлении?',
    answer1:'Да интересует',
    answer2:'Скорее да',
    answer3:'Нет необходимости',
    answer4:'Не интересует',
    listPoint1:[6],
    listPoint2:[6],
    listPoint3:[4,5],
    listPoint4:[4,5]
};
arrOption[9]={
    question:'4 Вас интересует большое количество бюджетных мест?',
    answer1:'Да интересует',
    answer2:'Скорее да',
    answer3:'Нет необходимости',
    answer4:'Не интересует',
    listPoint1:[6],
    listPoint2:[5,6],
    listPoint3:[4,5],
    listPoint4:[4]
};
arrOption[10]={
    question:'5 Вам нравится часто контактировать с людьми?',
    answer1:'Да',
    answer2:'Скорее да',
    answer3:'Не совсем',
    answer4:'Нет',
    listPoint1:[4,5],
    listPoint2:[4,5],
    listPoint3:[6],
    listPoint4:[6]
};
arrOption[11]={
    question:'6 Вам нравится заниматься искусством?',
    answer1:'Да',
    answer2:'Скорее да',
    answer3:'Не совсем',
    answer4:'Нет',
    listPoint1:[6],
    listPoint2:[6],
    listPoint3:[6,5],
    listPoint4:[4,5]
};
arrOption[12]={
    question:'7 Что из перечисленного вам нравится больше?',
    answer1:'Создавать рекламу',
    answer2:'Создавать видео',
    answer3:'Рисовать',
    answer4:'Создавать дизайн логотипов',
    listPoint1:[4],
    listPoint2:[5],
    listPoint3:[6],
    listPoint4:[6]
};

let arrSpeciality=[];
arrSpeciality[0]={
    nameProfile:'Информационные системы и технологии(ИФСТ)',
    profile:'информационные системы и технологии, информационные технологии в медиаиндустрии',
    formEducation:'очная, заочная',
    exam:'математика, русский язык, физика или информатика на выбор',
    description:'Высокопрофессиональное обучение программированию, разработке компьютерных игр и мобильных приложений, облачным вычислениям, базам данных, интернет-технологиям искусственного интеллекта, виртуальной и дополнительной реальности, мультимедийным технологиям'
}
arrSpeciality[1]={
    nameProfile:'Информатика и вычислительная техника(ИВЧТ)',
    profile:'вычислительные машины, комплексы, системы и сети',
    formEducation:'очная, заочная',
    exam:'математика, русский язык, физика или информатика на выбор',
    description:'Изучение современных информационных технологий, облачных технологий, языков программирования, математических основ информатики. Отдельное внимание уделяется аппаратному обеспечению компьютерных систем, администрированию операционных систем и компьютерных сетей'
}
arrSpeciality[2]={
    nameProfile:'Прикладная информатика(ПИНФ)',
    profile:'прикладная информатика в информационной среде',
    formEducation:'очная',
    exam:'математика, русский язык, физика или информатика на выбор',
    description:'Изучение средств разработки прикладного программного обеспечения, моделирования информационных процессов в целях разрешения конкретных практических проблем, проектирования информационных систем. Отдельное внимание уделяется проведению тестирования программного обеспечения, осуществлению анализа качества тестового покрытия, разработке технического задания на систему, оцениванию соответствия требованиям существующих систем и их аналогов'
}
arrSpeciality[3]={
    nameProfile:'Программная инженерия(ПИНЖ)',
    profile:'управление разработкой программных проектов',
    formEducation:'очная',
    exam:'математика, русский язык, физика или информатика на выбор',
    description:'Программа обучения предполагает детальное изучение всех этапов создания программного продукта. Особое внимание уделяется освоению инструментов проектирования, разработки, тестирования программного обеспечения, изучаются технологии управления программными проектами и IT-услугами'
}
arrSpeciality[4]={
    nameProfile:'Реклама и связи с общественностью(РКЛМ)',
    profile:'информационные технологии в рекламе и связях с общественностью',
    formEducation:'очная, заочная',
    exam:'обществознание, русский язык, история или информатика на выбор',
    description:'Студенты учатся создавать полный цикл рекламной компании - от разработки концепции до создания цифровых рекламных медийных продуктов (графика, видео, трехмерная визуализация). Выпускники успешно работают специалистами по рекламе и связям с общественностью, маркетолагами, разработчиками рекламных графических, видео и аудио-продуктов, дизайнерами, копирайтерами и др.'
}
arrSpeciality[5]={
    nameProfile:'Телевидение(ТЛВД)',
    profile:'техника и технология телевизионного производства',
    formEducation:'очная',
    exam:'литература, русский язык, история или обществознание на выбор',
    description:'Студенты изучают операторское искусство, технологии видеомонтажа, телепрограмм. Стать успешным специалистом в сфере видеоиндустрии выпускникам помогают навыки создания мультимедийных проектов и прохождение практики в ведущих телекомпаниях региона'
}
arrSpeciality[6]={
    nameProfile:'Дизайн(ДИЗН)',
    profile:'графический дизайн, промышленный дизайн',
    formEducation:'очная, очно-заочная',
    exam:'математика, русский язык, физика или информатика на выбор',
    description:'Мастерство дизайнера-графика позволит выпускнику разрабатывать концепт-арт компьютерных игр, макетировать сайты, разрабатывать рекламные макеты для веб-пространства и полиграфии, создавать иллюстрации, видеозаставки, трехмерные модели пространства и персонажей, анимацию, обрабатывать фотографии'
}
let arrPoint=[0,0,0,0,0,0,0];
let countQuestion=7;
let shift=0;
let flagSp="отсутствует";
let arrLen=(arrOption.length-1)/2;
function appStart(){
    document.getElementById("butSend").value="Начать тест";
    document.getElementById("question1").innerHTML=arrOption[shift].question;
    document.getElementById("optionlabel1").innerHTML=arrOption[shift].answer1;
    document.getElementById("optionlabel2").innerHTML=arrOption[shift].answer2;
    document.getElementById("optionlabel3").innerHTML=arrOption[shift].answer3;
    document.getElementById("optionlabel4").innerHTML=arrOption[shift].answer4;
}
window.onload=appStart;
function app(){
    if(shift<countQuestion  && (flagSp=="отсутствует") && (document.getElementById("option1").checked==true || document.getElementById("option2").checked==true || document.getElementById("option3").checked==true || document.getElementById("option4").checked==true)){
        document.getElementById("aRest1").href="#send";
        if (document.getElementById("option1").checked==true){
            for (let i=0;i<arrOption[shift].listPoint1.length;i++){
                arrPoint[arrOption[shift].listPoint1[i]]++;
            }
            flagSp="Design";
        }
        if (document.getElementById("option2").checked==true){
            for (let i=0;i<arrOption[shift].listPoint2.length;i++){
                arrPoint[arrOption[shift].listPoint2[i]]++;
            }
            flagSp="Design";
        }
        if (document.getElementById("option3").checked==true){
            for (let i=0;i<arrOption[shift].listPoint3.length;i++){
                arrPoint[arrOption[shift].listPoint3[i]]++;
            }
            flagSp="IT";
        }
        if (document.getElementById("option4").checked==true){
            for (let i=0;i<arrOption[shift].listPoint4.length;i++){
                arrPoint[arrOption[shift].listPoint4[i]]++;
            }
            flagSp="IT";
        }
        shift++;
        if(shift>=countQuestion){
            shift=0;
            flagSp="отсутствует";
            appRes();
        }
        if (flagSp=="IT"){
            document.getElementById("butSend").value="Выбрать";
            document.getElementById("question1").innerHTML=arrOption[shift].question;
            document.getElementById("optionlabel1").innerHTML=arrOption[shift].answer1;
            document.getElementById("optionlabel2").innerHTML=arrOption[shift].answer2;
            document.getElementById("optionlabel3").innerHTML=arrOption[shift].answer3;
            document.getElementById("optionlabel4").innerHTML=arrOption[shift].answer4;
        }
        else if (flagSp=="Design"){
            document.getElementById("butSend").value="Выбрать";
            document.getElementById("question1").innerHTML=arrOption[shift+arrLen].question;
            document.getElementById("optionlabel1").innerHTML=arrOption[shift+arrLen].answer1;
            document.getElementById("optionlabel2").innerHTML=arrOption[shift+arrLen].answer2;
            document.getElementById("optionlabel3").innerHTML=arrOption[shift+arrLen].answer3;
            document.getElementById("optionlabel4").innerHTML=arrOption[shift+arrLen].answer4;
        }
    }
    else if(shift<countQuestion && (flagSp=="IT") && (document.getElementById("option1").checked==true || document.getElementById("option2").checked==true || document.getElementById("option3").checked==true || document.getElementById("option4").checked==true)){
        if (document.getElementById("option1").checked==true){
            for (let i=0;i<arrOption[shift].listPoint1.length;i++){
                arrPoint[arrOption[shift].listPoint1[i]]++;
            }
        }
        if (document.getElementById("option2").checked==true){
            for (let i=0;i<arrOption[shift].listPoint2.length;i++){
                arrPoint[arrOption[shift].listPoint2[i]]++;
            }
        }
        if (document.getElementById("option3").checked==true){
            for (let i=0;i<arrOption[shift].listPoint3.length;i++){
                arrPoint[arrOption[shift].listPoint3[i]]++;
            }
        }
        if (document.getElementById("option4").checked==true){
            for (let i=0;i<arrOption[shift].listPoint4.length;i++){
                arrPoint[arrOption[shift].listPoint4[i]]++;
            }
        }
        shift++;
        if(shift>=countQuestion){
            shift=0;
            flagSp="отсутствует";
            document.getElementById("aRest1").href="#rest";
            appRes();
        }
        if (flagSp=="IT"){
            document.getElementById("question1").innerHTML=arrOption[shift].question;
            document.getElementById("optionlabel1").innerHTML=arrOption[shift].answer1;
            document.getElementById("optionlabel2").innerHTML=arrOption[shift].answer2;
            document.getElementById("optionlabel3").innerHTML=arrOption[shift].answer3;
            document.getElementById("optionlabel4").innerHTML=arrOption[shift].answer4;
        }
        else{
            document.getElementById("butSend").value="Начать тест";
            document.getElementById("question1").innerHTML=arrOption[shift].question;
            document.getElementById("optionlabel1").innerHTML=arrOption[shift].answer1;
            document.getElementById("optionlabel2").innerHTML=arrOption[shift].answer2;
            document.getElementById("optionlabel3").innerHTML=arrOption[shift].answer3;
            document.getElementById("optionlabel4").innerHTML=arrOption[shift].answer4;
        }
        if (shift==6){
            document.getElementById("butSend").value="Закончить тест";
        }
    }
    else if(shift<countQuestion && (flagSp=="Design") && (document.getElementById("option1").checked==true || document.getElementById("option2").checked==true || document.getElementById("option3").checked==true || document.getElementById("option4").checked==true)){
        if (document.getElementById("option1").checked==true){
            for (let i=0;i<arrOption[shift+arrLen].listPoint1.length;i++){
                arrPoint[arrOption[shift+arrLen].listPoint1[i]]++;
            }
        }
        if (document.getElementById("option2").checked==true){
            for (let i=0;i<arrOption[shift+arrLen].listPoint2.length;i++){
                arrPoint[arrOption[shift+arrLen].listPoint2[i]]++;
            }
        }
        if (document.getElementById("option3").checked==true){
            for (let i=0;i<arrOption[shift+arrLen].listPoint3.length;i++){
                arrPoint[arrOption[shift+arrLen].listPoint3[i]]++;
            }
        }
        if (document.getElementById("option4").checked==true){
            for (let i=0;i<arrOption[shift+arrLen].listPoint4.length;i++){
                arrPoint[arrOption[shift+arrLen].listPoint4[i]]++;
            }
        }
        shift++;
        if(shift>=countQuestion){
            shift=0;
            flagSp="отсутствует";
            document.getElementById("aRest1").href="#rest";
            appRes();
        }
        if (flagSp=="Design"){
            document.getElementById("question1").innerHTML=arrOption[shift+arrLen].question;
            document.getElementById("optionlabel1").innerHTML=arrOption[shift+arrLen].answer1;
            document.getElementById("optionlabel2").innerHTML=arrOption[shift+arrLen].answer2;
            document.getElementById("optionlabel3").innerHTML=arrOption[shift+arrLen].answer3;
            document.getElementById("optionlabel4").innerHTML=arrOption[shift+arrLen].answer4;
        }
        else{
            document.getElementById("butSend").value="Начать тест";
            document.getElementById("question1").innerHTML=arrOption[shift].question;
            document.getElementById("optionlabel1").innerHTML=arrOption[shift].answer1;
            document.getElementById("optionlabel2").innerHTML=arrOption[shift].answer2;
            document.getElementById("optionlabel3").innerHTML=arrOption[shift].answer3;
            document.getElementById("optionlabel4").innerHTML=arrOption[shift].answer4;
        }
        if (shift==6){
            document.getElementById("butSend").value="Закончить тест";
        }
    }
    if (shift==1){
        document.getElementById("resultat1").innerHTML="Направление: ";
        document.getElementById("resultat2").innerHTML="Профили: ";
        document.getElementById("resultat3").innerHTML="Формы обучения: ";
        document.getElementById("resultat4").innerHTML="Приём по результатам ЕГЭ: ";
        document.getElementById("resultat5").innerHTML="Описание: ";        
    }
}

function appRes(){
    let maxk=0;
    for (let i=0;i<arrPoint.length;i++){
        if (maxk<arrPoint[i]){
            maxk=i;
        }
        arrPoint[i]=0;
    }
    document.getElementById("resultat1").innerHTML="Направление: "+arrSpeciality[maxk].nameProfile;
    document.getElementById("resultat2").innerHTML="Профили: "+arrSpeciality[maxk].profile;
    document.getElementById("resultat3").innerHTML="Формы обучения: "+arrSpeciality[maxk].formEducation;
    document.getElementById("resultat4").innerHTML="Приём по результатам ЕГЭ: "+arrSpeciality[maxk].exam;
    document.getElementById("resultat5").innerHTML="Описание: "+arrSpeciality[maxk].description;
}