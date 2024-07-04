const state = {
    taskList: [],
  };
  
  // DOM Operations
  const taskContents = document.querySelector(".task__contents");
  const taskModal = document.querySelector(".task__modal__body");
  
//   console.log(taskContents);
//   console.log(taskModal);
const gethtmlcontent = ({ id, title, description, type, url }) => `
    <div class="col-md-6 col-lg-4 mt-3" id="${id}">
      <div class="shadow p-3 mb-5 bg-body-tertiary rounded">
        <div class="card" style="width: 18rem;">
          <div class="card-header d-flex justify-content-end">
            <button type="button" class="btn btn-outline-primary">
              <i class="fa-sharp fa-regular fa-pencil"></i>
            </button>
            <button type="button" class="btn btn-outline-danger">
              <i class="fa-solid fa-trash-alt"></i>
            </button>
          </div>
          <div class="card-body">
            ${url ? `<img src="${url}" alt="card img" class="card-img-top md-3 rounded-lg" />` : ''}
            <h4 class="card-title task_card_title">${title}</h4>
            <p class="description trim-3-lines text-muted">${description}</p>
            <div class="tags text-white d-flex flex-wrap">
              <span class="badge bg-primary m-1">${type}</span>
            </div>
          </div>
          <div class="card-footer">
            <button type="button" class="btn btn-outline-primary float-right" data-bs-toggle="modal" data-bs-target="#showTask">Open Task</button>
          </div>
        </div>
      </div>
    </div>
    `;

    // modal on clicking open task
    const htmlmodalcontatent=({id,title,description,url})=>{
        const date=new Date(parseInt(id));
        return`
        <div id=${id}>
           ${
            url &&
            `<img width='100%' src=${url} alt='Card Image' class='img-fluid place__holder__image mb-3' />`   
            }
           
            <strong class='text-muted text-sm'>Created on: ${date.toDateString()}</strong>
            <h2 class='my-3'>${title}</h2>
            <p class='text-muted'>${description}</p>
        </div>
        `;
    };

