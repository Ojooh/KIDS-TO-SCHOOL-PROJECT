jQuery(document).ready(function( $ ) {
    var error                   = $(".error");
    var sidebarToggler          = $("#sideBarToggler");
    var window_width            = $(window).width();
    var sideBar                 = $("#sideBar");
    var mainPanel               = $(".main-content");
    var dates                   = $(".pretty-date");
    var openMdl_1               = $(".mdl-admin-form");
    var modal                   = $(".modal");
    var closeModl               = $(".close-modal");
    var dob                     = $("#dob");
    var age                     = $("#age");
    var deleteImage             = $(".delete-image");
    var submitAdmin             = $('#submitAdmin');
    var profilePic              = $("#profilePic");
    var status                  = $(".custom-control-input")
    var editAdmin               = $(".edit-admin");
    const days                  = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames            = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    if (window_width <= 991 ){
            if ($(".side-nav li").length == 5) {
                    var html = `<li class="nav-item">
                    <div class="search-area mt-2">
                        <div class="input-group">
                            <span class="input-group-text" id="basic-addon1">
                                <i class="fas fa-search"></i>
                            
                            <input type="text" class="form-control" placeholder="What are you looking for..." aria-label="Username"
                                aria-describedby="basic-addon1">
                        </div>
                    </div>
                </li>
                <li class="nav-item <%= active.usr %>">
                    <a class="nav-link" href="sponsors.html">
                        <i class="fas fa-user"></i>
                        Profile
                    </a>
                </li>`;
                $(".side-nav").prepend(html);
            }
    } else {
        if ($(".side-nav li").length != 5) {
            $(".side-nav li").eq(0).remove();
            $(".side-nav li").eq(0).remove();
        }
    }


    for(var t = 0; t < dates.length; t ++){
        var date = prettyDate($(dates[t]).html().trim());
        $(dates[t]).html(date);
    }

    //function to make date-time pretty
    function prettyDate (date) {
        if (date != "0000-00-00 00:00:00"){
            var d           = new Date (date);
            var day         = d.getDate();
            var dayName     = days[d.getDay()];
            var month       = monthNames[d.getMonth()];
            var year        = d.getFullYear();
            var h           = d.getHours()
            var m           = d.getMinutes();
            var _time       = (h > 12) ? (h-12 + ':' + m +' PM') : (h + ':' + m +' AM');
            var result      =  dayName + " " + day + " " + month + ", " + year + " " + _time;
            return result
        } else {
            return "Never";
        }
    }

    //Function to acativate Tool Tip
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    //Function to adjust sidebar on window size change
    $(window).on('resize', function() {
        var width = $(window).width();
        if (width <= 991 ){
            if ($(".side-nav li").length == 5) {
                    var html = `<li class="nav-item">
                    <div class="search-area mt-2">
                        <div class="input-group">
                            <span class="input-group-text" id="basic-addon1">
                                <i class="fas fa-search"></i>
                            
                            <input type="text" class="form-control" placeholder="What are you looking for..." aria-label="Username"
                                aria-describedby="basic-addon1">
                        </div>
                    </div>
                </li>
                <li class="nav-item <%= active.usr %>">
                    <a class="nav-link" href="sponsors.html">
                        <i class="fas fa-user"></i>
                        Profile
                    </a>
                </li>`;
                $(".side-nav").prepend(html);
            }
        } else {
            if ($(".side-nav li").length != 5) {
                $(".side-nav li").eq(0).remove();
                $(".side-nav li").eq(0).remove();
            }
            

        }
    });

    //
    // $(window).on("click",  function(e) {
    // });

    //Function to open and close sidebar in mobile view
    sidebarToggler.on("click", function (e){
        e.preventDefault();
        sideBar.toggleClass("show");
        if (sidebarToggler.hasClass("show")){
            $(".logo").css({"display": "none"})
        }
    });

    //
    mainPanel.on("click", function(e){
        if (!$(e.target).hasClass("fa-bars") && !$(e.target).hasClass("icon-reorder")){
            sideBar.removeClass("show");
        }
        
    });

    //Function to close Modal
    closeModl.on("click", function(e){
        modal.modal("hide");
    });

    //Function to Open Modal
    openMdl_1.on("click", function(e){
        e.preventDefault();
        e.stopPropagation();

        var mdl = $("#addAdminModalForm");
        var content     = $(".admin-form-modal");
        mdl.modal("show");
        //content.css({"position":"static", "top" : "none"});
    });

    //Function To calculate and display age
    dob.on("change", function(e) {
        var d               = new Date();
        var val             = $(this).val();
        var date_divide     = val.split("-");
        var user_year       = date_divide[0];
        var current_year    = d.getFullYear();
        var new_age         = parseInt(current_year) - parseInt(user_year);
        age.val(new_age)
    });

    //Function To Preview Image
    profilePic.on("change", function (e){
        $('.prev').removeClass("deactivated");
        $('#frame').attr('src', URL.createObjectURL(e.target.files[0]));
    });

    //Function To Submit Form
    submitAdmin.on("click", function(e){
        e.preventDefault();
        $(".form-group .text-danger").html("");

        var fd          = new FormData();
        var fname      = $("#fname").val().trim();
        var lname      = $("#lname").val().trim();
        var dob        = $("#dob").val().trim();
        var age        = $("#age").val().trim();
        var gender     = $("#gender").val().trim();
        var country    = $("#country").val().trim();
        var state      = $("#state").val().trim();
        var email      = $("#email").val().trim();
        var tely       = $("#telephone").val().trim();
        var code       = $("#countryCode").val().trim();
        var title      = $("#title").val().trim();
        var password   = $("#password").val().trim();
        var pp         = profilePic[0].files[0];
        var nameRegex  = /^[A-Za-z.\s-]*$/;
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
        var telRegex   = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
        var passRegex  = /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{7,15}$/
        var msg        = "";
        var validImageTypes = ['image/jpeg', 'image/png', ];

        if (fname == "" || nameRegex.test(fname) == false){
            msg = "Invalid or No Value for First Name Field.";
            $(".fname-error").html(msg);
        } else if (lname == "" || nameRegex.test(lname) == false){
            msg = "Invalid or No Value for Last Name Field.";
            $(".lname-error").html(msg);
        } else if (dob == ""){
            msg = "Invalid or No DOB Field.";
            $(".dob-error").html(msg);
        } else if (age == "" || parseInt(age) < 12){
            msg = "Age Field Not Calculated Properly. Re-enter DOB.";
            $(".age-error").html(msg);
        } else if (gender == ""){
            msg = "Invalid or No Value for Gender Field.";
            $(".gender-error").html(msg);
        } else if (country == ""){
            msg = " Invalid or No Value for  Country Field.";
            $(".country-error").html(msg);
        } else if (state == ""){
            msg = "Invalid or No Value for State Field.";
            $(".state-error").html(msg);
        } else if (email == "" || emailRegex.test(email) == false){
            msg = "Invalid or No Value for Email Field.";
            $(".email-error").html(msg);
        } else if (tely == "" || telRegex.test(tely) == false){
            msg = "Invalid or No Value for Telephone Field.";
            $(".tely-error").html(msg);
        } else if (title == ""){
            msg = "Invalid or No Value for Title Field.";
            $(".title-error").html(msg);
        } else if (password == "" || passRegex.test(password) == false){
            msg = "Invalid or No Value for Password Field. must be 7 charcter long with at least one special charcter and number";
            $(".password-error").html(msg);
        } else if (pp !== undefined && validImageTypes.includes(pp.type) == false){
            msg = "Invalid or No Image was selected.";
            $(".pp-error").html(msg);
        } else {
            if (msg == ""){
                if (pp == "" || pp == undefined){
                    pp = "";
                }

                fd.append("fname", fname.charAt(0).toUpperCase() + fname.substr(1).toLowerCase());
                fd.append("lname", lname.charAt(0).toUpperCase() + lname.substr(1).toLowerCase());
                fd.append("dob", dob);
                fd.append("age", age);
                fd.append("gender", gender);
                fd.append("country", country);
                fd.append("state", state);
                fd.append("email", email);
                fd.append("code", code);
                fd.append("telephone", tely);
                fd.append("title", title);
                fd.append("password", password);
                fd.append("pp", pp);
                var url = $(this).attr("data-url");

                $.ajax({
                url: url,
                type: 'POST',
                data: fd,
                contentType: false,
                processData: false,
                beforeSend: function() {
                    Swal.fire({
                        title: 'Auto close alert!',
                        html: 'Please Hold on as your details are uploaded, do not refresh.',
                        timer: 40000,
                        timerProgressBar: true,
                        showConfirmButton: false,
                        allowOutsideClick: false,
                    });
                },
                success: function (data) {
                    console.log(data.success);
                    if (data.success){
                        modal.modal("hide");
                        Swal.fire(data.success, "Click OK to Proceed", "success").then(
                            function(){
                                // console.log("okay");
                               location.reload();
                            }
                        )
                    }
                    else{
                        error.html("");
                        msg = "<span class='alert alert-success'>" + data.error + "</span>";
                        error.html(msg);
                    }
                    
                }
                });
            }
        }
    });


    //Function To Delete Image
    deleteImage.on("click", function(e){
        e.preventDefault();

        if ($(this).attr("data-type") == "add"){
            profilePic.val("");
            $("#frame").attr("src", "");
            $(".prev").addClass("deactivated");
        }
    });

    //Function To Change Status
    status.on("change", function(e){
        var ID      = $(this).attr("id").split("-")[1];
        var value   = $(this).val();
        var url     = "/admin/Administrators/chnage_status";
        var data    = {id : ID, status : value};

        $.ajax({
            url: url,
            type: 'POST',
            data: data,
            beforeSend: function() {
                Swal.fire({
                    title: 'Auto close alert!',
                    html: 'Please Hold on as your details are uploaded, do not refresh.',
                    timer: 40000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    allowOutsideClick: false,
                });
            },
            success: function (data) {
                console.log(data.success);
                if (data.success){
                    modal.modal("hide");
                    Swal.fire(data.success, "Click OK to Proceed", "success").then(
                        function(){
                            location.reload();
                        }
                    )
                }
                else{
                    error.html("");
                    msg = "<span class='alert alert-success'>" + data.error + "</span>";
                    error.html(msg);
                }
                    
            }
        });
    });

    //Function to edit Admin
    editAdmin.on("click", function(e){
        e.preventDefault();
        e.stopPropagation();

        var mdl         = $("#addAdminModalForm");
        var ID          = $(this).attr("data-id");
        var url         = $(this).attr("data-url");
        var data        = {id : ID};

        $.ajax({
            url: url,
            type: 'POST',
            data: data,
            beforeSend: function() {
                Swal.fire({
                    title: 'Auto close alert!',
                    html: 'Please Hold on as your details are uploaded, do not refresh.',
                    timer: 40000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    allowOutsideClick: false,
                });
            },
            success: function (data) {
                swal.close();
                if(data.success){
                    $("#userID").val(data.success.user_id)
                    $("#fname").val(data.success.fname);
                    $("#lname").val(data.success.lname);
                    $("#dob").val(data.success.dob.toString());
                    $("#age").val(data.success.age);
                    $("#gender").val(data.success.gender);
                    $("#country").val(data.success.country);
                    console.log(countries);
                    var cix = $("#country").val().split("-");
                    var states = countries[cix[1]].states;
                    $("#state").empty();
                    html_state = "<option value=''><!-----choose----></option>";
                    for (var u = 0; u < states.length; u++){
                        var ste = states[u];
                        html_state += "<option value='" + ste + "'>" + ste + "</option>";
                    }
                    $("#state").append(html_state);
                    $("#state").val(data.success.state);
                    $("#email").val(data.success.email);
                    $("#telephone").val(data.success.telephone.split("-")[1]);
                    $("#countryCode").val(data.success.telephone.split("-")[0]);
                    $("#title").val(data.success.user_type);
                    $("#password").val("");
                    mdl.modal("show");
                    
                }
                
                    
            }
        });
        
    });







});