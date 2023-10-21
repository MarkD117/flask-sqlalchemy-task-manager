document.addEventListener("DOMContentLoaded", function() {
    // sidenav initialization
    let sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav);

    // Modal initialization
    let modal = document.querySelectorAll('.modal');
    M.Modal.init(modal);
    
    // datepicker initialization
    let datepicker = document.querySelectorAll(".datepicker");
    M.Datepicker.init(datepicker, {
        format: "dd mmmm, yyyy",
        // changes the done button text to 'Select'
        i18n: {done: "Select"}
    });

    // select initialization
    let selects = document.querySelectorAll("select");
    M.FormSelect.init(selects);

    // collapsible initialization
    let collapsibles = document.querySelectorAll(".collapsible");
    M.Collapsible.init(collapsibles);
});