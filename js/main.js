console.log('Starting up');
$(onInIt)

var gInputs={
  email:'',
  subject:'',
  body:''
}

function onInIt() {
  renderProjects()
  renderProjectsPortfolios()
}

function renderProjects() {
  var Projects = getProjects()
  var strHtml = `<div class="row">`
  Projects.forEach(project => {
    strHtml += `
    <div class="col-md-4 col-sm-6 portfolio-item">
   <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${project.id+1}">
   <div class="portfolio-hover">
    <div class="portfolio-hover-content">
      <i class="fa fa-plus fa-3x"></i>
    </div>
   </div>
   <img class="img-fluid" src=${project.img} alt="">
   </a>
   <div class="portfolio-caption portfolioCard">
    <h4>${project.title}</h4>
    <p class="text-muted">${project.desc}</p>
    </div>
   </div>
    `
  })
  strHtml += `</div>`
  document.querySelector('.projectsContainer').innerHTML = strHtml
}

function renderProjectsPortfolios(){
  var Projects = getProjects()
  var strHtml = ``
  Projects.forEach(project => {
    strHtml += `
    <div class="portfolio-modal modal fade" id="portfolioModal${project.id+1}" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <!-- Project Details Go Here -->
                <h2>${project.name}</h2>
                <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                <img class="img-fluid d-block mx-auto" src=${project.img} alt="Project Image">
                <p>${project.detailedDesc}</p>
                <ul class="list-inline">
                  <li>Category: ${project.catagory}</li>
                  <li class="mt-3"><a href=${project.url}><button class="btn btn-info">Visit Project</button></a></li>
                </ul>
                <button class="btn btn-success" data-dismiss="modal" type="button">
                  <i class="fa fa-times"></i>
                  Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `
  })
  document.querySelector('.portfoliosContainer').innerHTML = strHtml
}

function onSendInput(val){
  if (val.Email) gInputs.email = val.Email
  if(val.Subject) gInputs.subject = val.Subject
  if (val.Body) gInputs.body = val.Body
}

function OnSendAllInputs(){
  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${gInputs.email}&su=${gInputs.subject}&body=${gInputs.body}`);
}













