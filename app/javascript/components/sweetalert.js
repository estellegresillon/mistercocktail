import swal from 'sweetalert';

function bindSweetAlertButtonDemo() {
  document.getElementById('sweet-alert-demo').addEventListener('click', () => {
    swal({
      title: "Hey !",
      text: "Are you sure you want to do this?",
      buttons: ["Hmm, wait!", "Yes !"],
      icon: "success"
    })
  });
}

export { bindSweetAlertButtonDemo };




function bindSweetAlertButtonDelete() {
  document.getElementById('sweet-alert-delete').addEventListener('click', () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your recipe has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your recipe is safe!");
      }
    });
  });
}

export { bindSweetAlertButtonDelete };
