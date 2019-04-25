// JavaScript Document
$(document).ready(function() {
  
  $(function(){
    $("#datepicker").datepicker();
  });
  
  $(function(){
    $("#timepicker").timepicker();
  });
  
  //partner profile 
  $("#profileOption").bind('change', function(e) {
    if($("#profileOption").val() == 'video'){
      $("#inputVideo").show();
      $("#inputImage").hide().prop('required', false);
    }
    else if($("#profileOption").val() == 'image') {
      $("#inputVideo").hide().prop('required', false);
      $("#inputImage").show();
    }
    else {
      $("#inputVideo").hide().prop('required', false);
      $("#inputImage").hide().prop('required', false);
    }
  }).trigger('change');
  
  //select course video or image
  $("#courseOption").bind('change', function(e) {
    if($("#courseOption").val() == 'video'){
      $("#courseVideoInput").show();
      $("#courseImageInput").hide().prop('required', false);
    }
    else if($("#courseOption").val() == 'image') {
      $("#courseVideoInput").hide().prop('required', false);
      $("#courseImageInput").show();
    }
    else {
      $("#courseVideoInput").hide().prop('required', false);
      $("#courseImageInput").hide().prop('required', false);
    }
  }).trigger('change');
  
  //select option public dan inhouse
    
  $('#courseType').bind('change', function (e){  
    if($("#courseType").val() == 'Public'){
      $("#optionDiv").css('display','block');
    }
    else if($("#courseType").val() == 'Inhouse') {
      $("#optionDiv").css('display','none').prop('required', false);
    }
    else {
      $("#optionDiv").hide().prop('required', false);
    }
  }).trigger('change');
  
  //scroll header top
  
  $(window).scroll(function() {
  var scrolling = $(window).scrollTop();
    if (scrolling > 100){
      $(".header-top").addClass("transform");
    } 
    else { 
      $(".header-top").removeClass("transform");
    }
  });

  var scrollAmount = 250;

  $(window).scroll(function() {
    if($(window).scrollTop() > scrollAmount) {
      $('div.back-to-top').fadeIn('slow');
    } else {
      $('div.back-to-top').fadeOut('slow');
    }
  });

  $('div.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 700);
    return false;
  });

  //Course side button
  $("#btn-divVid").click(function(){
    $('html, body').animate({
      scrollTop: $("#divVideo").offset().top}, 700);
  });
  $("#btn-divDesc").click(function(){
    $('html, body').animate({
      scrollTop: $("#divDesc").offset().top}, 700);
  });
  $("#btn-divTrainer").click(function(){
    $('html, body').animate({
      scrollTop: $("#divTrainer").offset().top}, 700);
  });
  $("#btn-divCourse").click(function(){
    $('html, body').animate({
      scrollTop: $("#divCourse").offset().top}, 700);
  });

  $("#btn-video").click(function(){
    $('html, body').animate({
      scrollTop: $("#video").offset().top}, 700);
  });
  $("#btn-deskripsi").click(function(){
    $('html, body').animate({
      scrollTop: $("#deskripsi").offset().top}, 700);
  });
  $("#btn-produk").click(function(){
    $('html, body').animate({
      scrollTop: $("#produk").offset().top}, 700);
  });
  // Collapse accordion every time dropdown is shown
  $('.dropdown-accordion').on('show.bs.dropdown', function (event) {
    var accordion = $(this).find($(this).data('accordion'));
    accordion.find('.panel-collapse.in').collapse('hide');
  });

  // Prevent dropdown to be closed when we click on an accordion link
  $('.dropdown-accordion').on('click', 'a[data-toggle="collapse"]', function (event) {
    event.preventDefault();
    event.stopPropagation();
    $($(this).data('parent')).find('.panel-collapse.in').collapse('hide');
    $($(this).attr('href')).collapse('show');
  });

//Text ellipsis
$(".one-line").ellipsis();

//Tooltip pada course list
$(".ea-edit, .ea-remove").tooltip();

//Select all checkbox
$("#agreeAll").change(function(){
  $("input:checkbox").prop('checked', $(this).prop("checked"));

});

// Input file choosen
var forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]);
  }
};

var file_inputs = document.querySelectorAll('[type=file]');
forEach(file_inputs, function (index, value) {
  if (value.dataset.value){
    value.addEventListener('change', function() {
      var files = new Array();
      for (var x = 0; x < this.files.length; x++) {
        files.push(this.files[x].name);
      }
      document.getElementById(this.dataset.value).value = files.join(', ');
      // this.value.replace(/^C:\\fakepath\\/, '');
    });
  }
});
  /*function extraInput(elem){
    if(elem.value == 'Public'){
      document.getElementById('optionDiv').style.display = "none";
    } 
    else{ 
      document.getElementById('optionDiv').style.display = "block";
    };
  }*/

// Print Table Attendance List

function printTable() {
	$("#printTableAtt").print({
        	globalStyles: true,
        	mediaPrint: false,
        	stylesheet: null,
        	noPrintSelector: ".no-print",
        	iframe: true,
        	append: null,
        	prepend: null,
        	manuallyCopyFormValues: true,
        	deferred: $.Deferred(),
        	timeout: 750,
        	title: null,
        	doctype: '<!doctype html>'
	});
}

$("#btnPrint").click(function(){
  printTable();
});
  
//Ripple function when button click
(function(window, $) {

  $(function() {

    $('.ripple').on('click', function(event) {
      event.preventDefault();

      var $div = $('<div/>'),
        btnOffset = $(this).offset(),
        xPos = event.pageX - btnOffset.left,
        yPos = event.pageY - btnOffset.top;

      $div.addClass('ripple-effect');
      var $ripple = $(".ripple-effect");

      $ripple.css("height", $(this).height());
      $ripple.css("width", $(this).height());
      $div
        .css({
          top: yPos - ($ripple.height() / 2),
          left: xPos - ($ripple.width() / 2),
          background: $(this).data("ripple-color")
        })
        .appendTo($(this));

      window.setTimeout(function() {
        $div.remove();
      }, 2000);
    });

  });

  

})(window, jQuery);
});

// Tambah elemen input untuk Course Content

$(function() {

  var i=2;
  var x=11;
  $("#addDays").click(function(){

    var a = $(document.createElement('div')).attr("id",'day'+i).attr("class",'ea-newcourse-box pull-left');
    a.after().html('<label for="" class="ea-label col-md-12 zero zero-r">Day '+i+'</label><div id="courseContent'+i+'" class="col-md-12 zero zero-r"><div id="content'+x+'" class="clearfix"><div class="col-md-2 zero zero-r"><label class="ea-label first">Lecture</label><input type="number" class="form-control" name="cl['+x+']" value="1" placeholder="1" readonly></div><div class="col-md-10 zero-r"><label class="ea-label">Course Content</label><input type="text" class="form-control" name="cc['+x+']" required></div></div></div><ul class="col-md-12 option text-right zero zero-r clearfix"><li><a class="ea-btn-add2" onClick="add'+i+'()"><span class="fa fa-plus-circle" style="padding-right: 4px; font-size: 14px;"></span>Add Content</a></li><li><a class="ea-btn-add2 remove" onClick="remove'+i+'()"><span class="fa fa-plus-circle" style="padding-right: 4px; font-size: 14px;"></span>Remove</a></li></ul>');
    a.appendTo('#byDay');
    i++;
    x+=10;
  });
  
  
// add and remove for Certificate function
	var ii =2;
	$('#addCertificate').click(function(){    
		var aa = $(document.createElement('div')).attr("id",'cc'+ii).attr("class",'form-group custom clearfix divider');
		
		
		aa.appendTo('#listCertificate');
		
		
		var inputnya = $(document.createElement('input')).attr('type', 'file').attr('onchange', 'getFileName('+ii+')').attr('name', 'trainer_file'+ii).attr('id', 'trainer_certificate'+ii).attr('class', 'upload ea-file').attr("data-value", "uploaded"+ii).attr("required", "required");
		
		var temp2 = '<br><p class="help-block">Institusi Yang Mengeluarkan Sertifikat</p><input type="text" class="form-control" name="trainer_certif_from['+ii+']"><p class="help-block">Judul Sertifikat</p><input type="text" class="form-control" name="trainer_certif_name['+ii+']"> <p class="help-block">Bidang Skill</p><select class="js-example-basic-multiple ea-select-cat getSkill2" name="trainer_certif_field['+ii+']" id="" multiple="multiple" required><script>$(function(){getSkill2();})</script></select> <p class="help-block">FIle Certificate</p><ul class="col-md-12 zero zero-r"> <p></p>';
	
		var temp3 = '<label for="trainer_certificate'+ii+'" style="width: 100%; display: inline;"><input  id="uploaded'+ii+'" placeholder="No choosen file" class="ea-file-txt" disabled></label></ul>';
	
		$("#cc"+ii).append(temp2);
		$("#cc"+ii).append('<label for="trainer_certificate'+ii+'" id="file'+ii+'" class="ea-file"> Choose File');
		$("#cc"+ii).append(inputnya);
		$("#cc"+ii).append('</label>');
		$("#cc"+ii).append(temp3);
		
		$('#trainer_certificate'+ii).hide();
		$('#file'+ii).on('click', function() {
			$('#trainer_certificate'+ii).trigger('click');
		});
		

		ii++;
		
		$(".js-example-basic-multiple").select2({
			placeholder: "Pilih kompetensi"  
		});
		update();
	});

	$('#delCertificate').click(function(){
		if(ii==2) 
		{
			alert("Minimal 1 Sertifikat");
			return false;
		}
		ii--;
		
		$('#cc'+ii).remove();
	});
  
  


  //Add and Remove Trainer Education

  var ddd =2;  
  $('#addEducation').click(function(){
    var ede = $(document.createElement('div')).attr("id",'ee'+ddd).attr("class",'form-group custom clearfix divider');
    ede.after().html('<p class="help-block">Pilih Pendidikan Terakhir</p><select class="js-states form-control" name="trainer_degree['+ddd+']" required> <option value="S3" class="cat">S3</option> <option value="S2" class="cat">S2</option> <option value="S1" class="cat">S1</option> <option value="D4" class="cat">D4</option> <option value="D3" class="cat">D3</option> <option value="D2" class="cat">D2</option> <option value="D1" class="cat">D1</option> </select> <p class="help-block">Nama Institusi/Lembaga/Sekolah/Perguruan Tinggi</p><input type="text" class="form-control" name="trainer_school['+ddd+']" required> <p class="help-block">Nama Fakultas/Jurusan</p><input type="text" class="form-control" name="trainer_major['+ddd+']" required> <p class="help-block">Tahun Lulus</p><select class="js-states getyear form-control" name="trainer_school_out['+ddd+']" required> <script>$(function(){getYear();})</script> </select><select style="display:none" class="js-states form-control" name="trainer_school_in['+ddd+']"><option value="aaa">aaa</option></select>'); 
    ede.appendTo('#listEducation');
    ddd++;
  });

  $('#delEducation').click(function(){
    if(ddd==2) {
      alert("Minimal 1 Jenjang Pendidikan");
      return false;
    }
    ddd--;
    $('#ee'+ddd).remove();
  });
  
  
  
  
  
    //Add and Remove Trainer credential

  var dddd =2;  
  $('#addCredential').click(function(){
    var ede = $(document.createElement('div')).attr("id",'cr'+dddd).attr("class",'form-group custom clearfix divider');
    ede.after().html('<p class="help-block">Nama Institusi/Lembaga/Sekolah/Perguruan Tinggi</p><input type="text" class="form-control" name="trainer_credential['+dddd+']" required>'); 
    ede.appendTo('#listCredential');
    dddd++;
  });

  $('#delCredential').click(function(){
    if(dddd==2) {
      //alert("Minimal 1 Credential");
      return false;
    }
    dddd--;
    $('#cr'+dddd).remove();
  });


  //Add and Remove Trainer Experience

  var eee =2;  
  $('#addExperience').click(function(){
    var exp = $(document.createElement('div')).attr("id",'exp'+eee).attr("class",'form-group custom clearfix divider');
    exp.after().html('<p class="help-block">Posisi Terakhir</p><input type="text" class="form-control" name="trainer_position['+eee+']" required><p class="help-block">Nama Prusahaan</p><input type="text" class="form-control" name="trainer_office['+eee+']" required> <p class="help-block">Perusahaan Bergerak Dalam Bidang</p>  <select class="js-example-basic-multiple ea-select-cat getSkill" name="trainer_field['+eee+']" id="" multiple="multiple" required><script>$(function(){getSkill();})</script></select> <p class="help-block">Tahun Masuk</p><select class="js-states getyear form-control" name="trainer_office_in['+eee+']" required> <script>$(function(){getYear();})</script> </select>   <p class="help-block">Tahun Keluar</p><select class="js-states getyear form-control" name="trainer_office_out['+eee+']" required> <script>$(function(){getYear();})</script> </select>'); 
    exp.appendTo('#listExperience');
    eee++;
	$(".js-example-basic-multiple").select2({
    placeholder: "Pilih kompetensi"  
  });
  });

  $('#delExperience').click(function(){
    if(eee==2) {
      alert("Minimal 1 Experience");
      return false;
    }
    eee--;
    $('#exp'+eee).remove();
  });
  
});


function getFileName(ii) {
   $('#uploaded'+ii).val($("#trainer_certificate"+ii).val().replace(/C:\\fakepath\\/, ''));
}

var currentYear = 2010;
function getSkidgll()
{
	for(var ii=2010; ii>=1970; ii--) {
		$(".js-example-basic-multiple.ea-select-cat.getSkill").append('<option value="'+ii+'">'+ii+'</option>');      
	  }  
	   
}

function getSkill()
{
	var url= base_url+"getExpertiseAll";
	
	var xhReq = new XMLHttpRequest();
	xhReq.open("GET", url, false);
	xhReq.send(null);
	var serverResponse = JSON.parse(xhReq.responseText);
	
	var arrayLength = serverResponse.length;
	for (var i = 0; i < arrayLength; i++) {
		$(".js-example-basic-multiple.ea-select-cat.getSkill").append('<option value="'+serverResponse[i].expertise_name+'">'+serverResponse[i].expertise_name+'</option>');   
	}
	
}


function getSkill2()
{
	var url= base_url+"getSkillAll";
	
	var xhReq = new XMLHttpRequest();
	xhReq.open("GET", url, false);
	xhReq.send(null);
	var serverResponse = JSON.parse(xhReq.responseText);
	
	var arrayLength = serverResponse.length;
	for (var i = 0; i < arrayLength; i++) {
		$(".js-example-basic-multiple.ea-select-cat.getSkill2").append('<option value="'+serverResponse[i].skill_name+'">'+serverResponse[i].skill_name+'</option>');   
	}
	
}
//Fungsi populate tahun di select option

var currentYear = new Date().getFullYear(),
    minYear = 1970;

function getYear(){
  for(var ii=currentYear; ii>=1970; ii--) {
    $(".js-states.getyear").append('<option value="'+ii+'">'+ii+'</option>');      
  }    
}
function getYear1(){
  for(var jj=minYear; jj<=currentYear; jj++) {
    $(".js-states.getyear1").append('<option value="'+jj+'">'+jj+'</option>');
  }
}
function getYear2(){
  for(var kk=minYear; kk<=currentYear; kk++) {
    $(".js-states.getyear2").append('<option value="'+kk+'">'+kk+'</option>');
  }
}

function justNumeric(){
    var kodeID = $(".kode-transaksi");
    if (!/^[0-9]+$/.test(kodeID.value)) { 
        alert("Please enter the code number.");
        e.value = e.value.substring(0,e.value.length-1);
    }
}

// Fungsi input kode transaksi hanya numeric

$(".kode-transaksi, .nominal").keydown(function (e) {
    // Allow: backspace, delete, tab, escape, and enter
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110]) !== -1 ||
         // Allow: Ctrl+A
        (e.keyCode == 65 && e.ctrlKey === true) ||
         // Allow: Ctrl+C
        (e.keyCode == 67 && e.ctrlKey === true) ||
         // Allow: Ctrl+X
        (e.keyCode == 88 && e.ctrlKey === true) ||
         // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
             // let it happen, don't do anything
             return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
    }
});


  var j=2;
  function add1()
  {
    if(j>10)
    {
      alert("Maksimal 10 Lecture.");
      return false;
    }

    var b = $(document.createElement('div')).attr("id",'content'+j).attr("class",'clearfix');
    b.after().html('<div class="col-md-2 zero zero-r"><label class="ea-label first">Lecture</label><input type="number" class="form-control" name="cl['+j+']" value="'+j+'" placeholder="'+j+'" readonly></div><div class="col-md-10 zero-r"><label class="ea-label">Course Content</label><input type="text" class="form-control" name="cc['+j+']" required></div>');
    b.appendTo('#courseContent1');
    j++;
  }
  function remove1(){
    if(j==2)
        {
          alert("Minimal 1 Lecture");
          return false;
        }
    j--;
    $("#content"+j).remove();
  }

  var k=12;
  function add2()
  {
    if(k>20)
    {
      alert("Maksimal 10 Lecture.");
      return false;
    }
    
    var c = $(document.createElement('div')).attr("id",'content'+k).attr("class",'clearfix');
    c.after().html('<div class="col-md-2 zero zero-r"><label class="ea-label first">Lecture</label><input type="number" class="form-control" name="cl['+k+']" value="'+(k-10)+'" placeholder="'+(k-10)+'" readonly></div><div class="col-md-10 zero-r"><label class="ea-label">Course Content</label><input type="text" class="form-control" name="cc['+k+']" required></div>');
    c.appendTo('#courseContent2');
    k++;
  }
  function remove2(){
    if(k==12)
        {
          alert("Minimal 1 Lecture");
          return false;
        }
    k--;
    $("#content"+k).remove();
  }

  var l=22;
  function add3()
  {
    if(l>30)
    {
      alert("Maksimal 10 Lecture.");
      return false;
    }
    var d = $(document.createElement('div')).attr("id",'content'+l).attr("class",'clearfix');
    d.after().html('<div class="col-md-2 zero zero-r"><label class="ea-label first">Lecture</label><input type="number" class="form-control" name="cl['+l+']" value="'+(l-20)+'" placeholder="'+(l-20)+'" readonly></div><div class="col-md-10 zero-r"><label class="ea-label">Course Content</label><input type="text" class="form-control" name="cc['+l+']" required></div>');
    d.appendTo('#courseContent3');
    l++;
  }
  function remove3(){
    if(l==22)
        {
          alert("Minimal 1 Lecture");
          return false;
        }
    l--;
    $("#content"+l).remove();
  }

//increment and decrement in shopping cart
  $(".btn-number").click(function(e){
    e.preventDefault();
    
    dataField = $(this).attr('data-field');
    dataType  = $(this).attr('data-type');
    var input = $('input[name="'+dataField+'"]');
    var currentVal = parseInt(input.val());
    
    if(!isNaN(currentVal)){
      
      if(dataType == 'minus') {
        
        if(currentVal > input.attr('min')) {
          input.val(currentVal - 1).change();
        }
        if(parseInt(input.val()) == input.attr('min')) {
          $(this).attr('disabled', true);
        }
      }
      
      else if (dataType == 'plus') {
        if(currentVal < input.attr('max')) {
          input.val(currentVal + 1).change();
        }
        if(parseInt(input.val()) == input.attr('max')) {
          $(this).attr('disabled', true);
        }
      }
      else {
        input.val(0);
      }
    }  
  });
  
  $(".input-number").focusin(function(){
    $(this).data('oldValue', $(this).val());
  });
  
  $(".input-number").change(function(){
    minValue = parseInt($(this).attr('min'));
    maxValue = parseInt($(this).attr('max'));
    valCurrent = parseInt($(this).val());
    
    name = $(this).attr('name');
    
    if(valCurrent >= minValue){
      $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
      alert("Sorry, the minimum was reachead");
      $(this).val($(this).data('oldValue'));
    }
    
    if(valCurrent <= maxValue) {
      $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
      alert("Sorry, the maximum was reachead");
      $(this).val($(this).data('oldValue'));
    }
  });
  
  $("input-number").keydown(function(){
    // Allow: backspace, delete, tab, escape, enter and .
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
        // Allow: Ctrl+A
        (e.keyCode == 65 && e.ctrlKey === true) || 
        // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
      // let it happen, don't do anything
      return;
        }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }
  });