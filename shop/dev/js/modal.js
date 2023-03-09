

var id;
$("#modalForm").on('show.bs.modal', function(event) {
    var button = $(event.relatedTarget); //Button that triggered the modal
    const produs = button.data('name') //need to find the button and get email
    const pret = button.data('price') //need to find the button and get name
    const description = button.data('description');
    $(".modal-header #titleModaLabel").html( produs );
    $(".modal-body #price").html( pret );
    id = button.attr('id');
    // var datainfo = document.getElementById(id);
     alert(JSON.stringify(button[0]));
    // alert(JSON.stringify(datainfo));
    
   
  })
  $("#modalForm").on('hidden.bs.modal', function(event) {
   
    alert('Modalul s-a inchis');
    document.getElementById(id).classList.remove('btn-primary');
    document.getElementById(id).classList.add('btn-success');
  })
  