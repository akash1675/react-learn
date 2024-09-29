function TodoItem(){
  let todoName = "buy choco";
  let todoDate = "10/02/2024";


    return <div class="container">
      <div class="row row1">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button " class="btn btn-danger button1">Delete</button>
        </div>
      </div>
     </div> 
}

export default TodoItem;