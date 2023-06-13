 //Initialize datatables
 $(document).ready(function () {
     $.getJSON('lgu.json', function (data) {
         var table = $('#lgulist').DataTable({
             "data": data,
             "pageLength": 25,
             fixedColumns: true,
             autofill: true,
             order: [
                 [1, 'asc']
             ],
             "columns": [{
                     "data": "region",
                     "width": "13%"
                 },
                 {
                     "data": "province",
                     "width": "18%"
                 },
                 {
                     "data": "citymun",
                     "width": "15%"
                 },
                 {
                     "data": "barangay",
                     "width": "16%"
                 },
                 {
                     "data": "position",
                     "width": "20%"
                 },
                 {
                     "data": "name",
                     "width": "25%"
                 },
                 {
                     "data": "contact",
                     "width": "5%"
                 },
                 {
                     "data": "location",
                     "width": null
                 }
             ],
             "columnDefs": [{
                 targets: [7],
                 visible: false,
                 searchable: true,
             }, ],
             "initComplete": function (settings, json) {
                 // Add a search box for each column
                 $('#lgulist thead tr').eq(0).clone().appendTo('#lgulist thead');
                 $('#lgulist thead tr:eq(1) th').each(function (i) {
                     var title = $(this).text();
                     $(this).html('<input type="text" placeholder="Search ' + title + '" class="smaller-text" />');

                     $('input', this).on('keyup change', function () {
                         if (table.column(i).search() !== this.value) {
                             table
                                 .column(i)
                                 .search(this.value)
                                 .draw();
                         }
                     });
                 });

                 // Remove sorting functionality for the search boxes
                 $('#lgulist thead tr:eq(1) th').each(function (i) {
                     $(this).removeClass('sorting');
                     $(this).off('click');
                 });
             }

         });

     });

 });