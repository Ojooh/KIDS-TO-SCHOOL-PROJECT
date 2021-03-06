jQuery(document).ready(function ($) {
    var error = $(".error");
    var sidebarToggler = $("#sideBarToggler");
    var closeSidebar = $(".close-sidebar");
    var window_width = $(window).width();
    var sideBar = $("#sideBar");
    var mainPanel = $(".main-content");
    var dates = $(".pretty-date");
    var currency = $(".pretty-currency");
    var openMdl_4 = $(".mdl-kid-form");
    var modal = $(".modal");
    var closeModl = $(".close-modal");
    var dob = $("#dob");
    var age = $("#age");
    var deleteImage = $(".delete-image");
    var deleteFile = $(".delete-file");
    // var submitKid = $('#submitKid');
    var profilePic = $("#profilePic");
    var status = $(".custom-control-input")
    var editKid = $(".edit-kid");
    var deleteKid = $(".delete-kid");
    var profile = $(".profile");
    var viewPassword = $("#basic-addon12");
    var genPassword = $("#basic-addon2");
    var nextFieldset = $(".next");
    var prevFieldset = $(".back");
    var profile = $(".profile");
    var counter = [0];

    var inptArr = {};
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var fNames = ['Personal Bio', 'School Details', 'Parent Information', 'Profile Information'];

    if (window_width <= 991) {
        if (!$(".side-nav li").hasClass("mob")) {
            var html = `<li class="nav-item mob">
                    <div class="search-area mt-2">
                        <div class="input-group">
                            <span class="input-group-text" id="basic-addon1">
                                <i class="fas fa-search"></i>
                            
                            <input type="text" class="form-control" placeholder="What are you looking for..." aria-label="Username"
                                aria-describedby="basic-addon1">
                        </div>
                    </div>
                </li>
                <li class="nav-item <%= active.usr %> mob">
                    <a class="nav-link" href="sponsors.html">
                        <i class="fas fa-user"></i>
                        Profile
                    </a>
                </li>`;
            $(".side-nav").prepend(html);
        }
    } else {
        if ($(".side-nav li").length > 6) {
            $(".side-nav li").eq(0).remove();
            $(".side-nav li").eq(0).remove();
        }
    }

    for (var i = 0; i < $(".card-title").length; i++) {
        if ($($(".card-title")[i]).html().trim() == "") {
            $($(".card-title")[i]).html("0");
            console.log($($(".card-title")[i]).html())
        }
    }



    for (var t = 0; t < dates.length; t++) {
        var date = prettyDate($(dates[t]).html().trim());
        $(dates[t]).html(date);
    }

    for (var t = 0; t < currency.length; t++) {
        var cur = prettyCurrency($(currency[t]).html().trim());
        $(currency[t]).html(cur);
    }

    //function to make date-time pretty
    function prettyDate(date) {
        if (date != "0000-00-00 00:00:00") {
            var d = new Date(date);
            var day = d.getDate();
            var dayName = days[d.getDay()];
            var month = monthNames[d.getMonth()];
            var year = d.getFullYear();
            var h = d.getHours()
            var m = d.getMinutes();
            var _time = (h > 12) ? (h - 12 + ':' + m + ' PM') : (h + ':' + m + ' AM');
            var result = dayName + " " + day + " " + month + ", " + year + " " + _time;
            return result
        } else {
            return "Never";
        }
    }

    //function to format currency
    function prettyCurrency(amount) {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'NGN',
            minimumFractionDigits: 2
        });

        return formatter.format(amount)
    }

    //Function to make date pretty
    function prettyDateOnly(date) {
        if (date != "0000-00-00 00:00:00") {
            var d = new Date(date);
            var day = d.getDate();
            var dayName = days[d.getDay()];
            var month = monthNames[d.getMonth()];
            var year = d.getFullYear();
            var result = dayName + " " + day + " " + month + ", " + year;
            return result
        } else {
            return "Never";
        }
    }

    //function for field1 validation
    function field1(inptArr) {
        nameRegex = /^[A-Za-z.\s-]*$/;
        emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
        telRegex = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
        if (inptArr.category == "" || inptArr.category === null) {
            return [$(".category-error"), "Invalid or No Value for First Name Field."];
        } else if (inptArr.fname == "" || nameRegex.test(inptArr.fname) == false) {
            return [$(".fname-error"), "Invalid or No Value for First Name Field."];
        } else if (inptArr.lname == "" || nameRegex.test(inptArr.lname) == false) {
            return [$(".lname-error"), "Invalid or No Value for Last Name Field."];
        } else if (inptArr.mname != "" && nameRegex.test(inptArr.mname) == false) {
            return [$(".mname-error"), "Invalid or No Value for Middle Name Field."];
        } else if (inptArr.dob == "") {
            return [$(".dob-error"), "Invalid or No DOB Field."];
        } else if (inptArr.age == "" || parseInt(inptArr.age) < 4) {
            return [$(".age-error"), "Age Field Not Calculated Properly. Re-enter DOB."];
        } else if (inptArr.gender == "") {
            return [$(".gender-error"), "Invalid or No Value for Gender Field."];
        } else if (inptArr.country == "" || inptArr.country === null) {
            return [$(".country-error"), " Invalid or No Value for  Country Field."];
        } else if (inptArr.state_O == "" || inptArr.state_O === null) {
            return [$(".state-o-error"), "Invalid or No Value for State of Origin Field."];
        } else if (inptArr.state_R == "" || inptArr.state_R === null) {
            return [$(".state-r-error"), "Invalid or No Value for Residential State Field."];
        } else if (inptArr.lga != "" && nameRegex.test(inptArr.lga) == false) {
            return [$(".lga-error"), "Invalid value for Local Government Area Field."];
        } else if (inptArr.email != "" && emailRegex.test(inptArr.email) == false) {
            return [$(".email-error"), "Invalid or No Value for Email Field."];
        } else if (inptArr.tely != "" && telRegex.test(inptArr.tely) == false) {
            return [$(".tely-error"), "Invalid or No Value for Telephone Field."];
        } else {
            return "Data-Valid";
        }
    }

    //Function for field2 validation
    function field2(inptArr) {
        nameRegex = /^[A-Za-z.\s-]*$/;

        if (inptArr.sname != "" && nameRegex.test(inptArr.sname) == false) {
            return [$(".sname-error"), "Invalid or No Value for School Name Field."];
        } else if (inptArr.sname != "" && inptArr.los == "") {
            return [$(".los-error"), "Invalid or No Value for Level Of Study Field."];
        } else if (inptArr.sname != "" && inptArr.class == "") {
            return [$(".class-error"), "Invalid or No Value for Class Field."];
        } else if (inptArr.sname != "" && inptArr.saddress == "") {
            return [$(".saddress-error"), "Invalid or No Value for School Address Field."];
        } else if (inptArr.sname != "" && inptArr.sfees == "") {
            return [$(".sfees-error"), "Invalid or No Value for School Fees."];
        } else if (inptArr.sfees != "" && isNaN(inptArr.sfees)) {
            return [$(".sfees-error"), "Invalid or No Value for School Fees."];
        } else if (inptArr.sother != "" && inptArr.sother.split(" ").length > 501) {
            return [$(".sother-error"), "Only 500 words Allowed."];
        } else {
            return "Data-Valid";
        }
    }

    // Function for field3 Validation
    function field3(inptArr) {
        nameRegex = /^[A-Za-z.\s-]*$/;
        emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
        telRegex = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;

        if (inptArr.ptitle == "" || nameRegex.test(inptArr.ptitle) == false) {
            return [$(".ptitle-error"), "Invalid or No Value for Parent Title Field."];
        } else if (inptArr.pname == "" || nameRegex.test(inptArr.pname) == false) {
            return [$(".pname-error"), "Invalid or No Value for Parent Name Field."];
        } else if (inptArr.pemail == "" || emailRegex.test(inptArr.pemail) == false) {
            return [$(".pemail-error"), "Invalid or No Value for Parent Email Field."];
        } else if (inptArr.ptel == "" || telRegex.test(inptArr.ptel) == false) {
            return [$(".ptel-error"), "Invalid or No Value for Telephone Field."];
        } else {
            return "Data-Valid";
        }
    }

    // Function for field4 Validation
    function field4(inptArr) {
        var validImageTypes = ['image/jpeg', 'image/png',];
        var validDocTypes = ['image/jpeg', 'image/png', 'application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

        if (inptArr.story != "" && inptArr.story.split(" ").length > 501) {
            return [$(".story-error"), "Only 500 words Allowed."];
        } else if (inptArr.goal != "" && inptArr.goal.split(" ").length > 501) {
            return [$(".goal-error"), "Only 500 words Allowed."];
        } else if (inptArr.bc !== undefined && inptArr.bc != "" && validDocTypes.includes(inptArr.bc.type) == false) {
            return [$(".bc-error"), "Only Image, pdf or docx files Allowed."];
        } else if (inptArr.pp !== undefined && inptArr.pp != "" && validImageTypes.includes(inptArr.pp.type) == false) {
            return [$(".pp-error"), "Only Image Files are Allowed."];
        } else {
            return "Data-Valid";
        }
    }

    //Function to acativate Tool Tip
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    //Function to adjust sidebar on window size change
    $(window).on('resize', function () {
        var width = $(window).width();
        if (width <= 991) {
            if (!$(".side-nav li").hasClass("mob")) {
                var html = `<li class="nav-item mob">
                    <div class="search-area mt-2">
                        <div class="input-group">
                            <span class="input-group-text" id="basic-addon1">
                                <i class="fas fa-search"></i>
                            
                            <input type="text" class="form-control" placeholder="What are you looking for..." aria-label="Username"
                                aria-describedby="basic-addon1">
                        </div>
                    </div>
                </li>
                <li class="nav-item <%= active.usr %> mob">
                    <a class="nav-link" href="sponsors.html">
                        <i class="fas fa-user"></i>
                        Profile
                    </a>
                </li>`;
                $(".side-nav").prepend(html);
            }
        } else {
            if ($(".side-nav li").length > 6) {
                $(".side-nav li").eq(0).remove();
                $(".side-nav li").eq(0).remove();
            }


        }
    });

    //
    // $(document).on("click",  function(e) {
    //     // console.log(e.target);
    // });

    //Function to open and close sidebar in mobile view
    sidebarToggler.on("click", function (e) {
        e.preventDefault();
        sideBar.toggleClass("show");
        $(".overlay").removeClass("deactivated");
        if (sidebarToggler.hasClass("show")) {
            $(".logo").css({ "display": "none" })
        }
    });

    //Function To Close Sidebar Mobile VIEW
    closeSidebar.on("click", function (e) {
        //console.log("yep");
        e.preventDefault();
        sideBar.removeClass("show");
        $(".overlay").addClass("deactivated");
    });

    //If Over Lay is Clicked
    $(".overlay").on("click", function (e) {
        e.preventDefault();
        sideBar.removeClass("show");
        $(".overlay").addClass("deactivated");
    });

    //
    mainPanel.on("click", function (e) {
        // console.log(e.target);
        if (!$(e.target).hasClass("fa-bars") && !$(e.target).hasClass("icon-reorder")) {
            sideBar.removeClass("show");
        }

    });

    //Function to close Modal
    closeModl.on("click", function (e) {
        modal.modal("hide");
    });

    //Function to Open Modal
    openMdl_4.on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        var mdl = $("#addKidModalForm");
        mdl.modal("show");
        //content.css({"position":"static", "top" : "none"});
    });

    //Function To calculate and display age
    dob.on("change", function (e) {
        var d = new Date();
        var val = $(this).val();
        var date_divide = val.split("-");
        var user_year = date_divide[0];
        var current_year = d.getFullYear();
        var new_age = parseInt(current_year) - parseInt(user_year);
        age.val(new_age)
    });

    //Function To Preview Image
    profilePic.on("change", function (e) {
        $('.prev').removeClass("deactivated");
        $('#frame').attr('src', URL.createObjectURL(e.target.files[0]));
    });

    $("#ptitle").on("change", function (e) {
        e.preventDefault();
        console.log($(this).val());

        if ($(this).val() == "Other") {
            $("#ptitle2").attr("type", "text");
        } else {
            $("#ptitle2").attr("type", "hidden");
        }
    });

    //function to move to the back fieldset
    prevFieldset.on("click", function (e) {
        e.preventDefault();

        var indx = counter[0];
        var fieldsets = $("fieldset");
        var prevField = fieldsets[indx - 1];
        var currentField = fieldsets[indx];
        var FieldsetName = $(".fieldset-name");
        counter[0] = indx - 1;
        FieldsetName.html(fNames[indx - 1]);
        prevFieldset.removeClass("deactivated");
        console.log(indx);

        if (indx - 1 == 0) {
            prevFieldset.addClass("deactivated");
        }

        if (indx == 2) {
            prevFieldset.removeClass("deactivated");
            nextFieldset.removeClass("deactivated");
        }
        nextFieldset.html("<i class='fas fa-long-arrow-alt-right'></i> Next");
        $(currentField).css({ 'display': 'none' });
        $(prevField).css({ 'display': "block" });

    });

    //function to move to the next fieldset
    nextFieldset.on("click", function (e) {
        e.preventDefault();
        e.stopPropagation()

        var indx = counter[0];
        // var fd = new FormData();
        var fieldsets = $("fieldset");
        var prevField = fieldsets[indx];
        var nextField = fieldsets[indx + 1];
        var FieldsetName = $(".fieldset-name");
        var url = $(this).attr("data-url");


        if (indx == 0) {

            inptArr.category = $("#category").val();
            inptArr.fname = $("#fname").val();
            inptArr.lname = $("#lname").val();
            inptArr.mname = $("#mname").val();
            inptArr.dob = $("#dob").val();
            inptArr.age = $("#age").val();
            inptArr.gender = $("#gender").val();
            inptArr.country = $("#country").val();
            inptArr.state_O = $("#state-o").val();
            inptArr.state_R = $("#state-r").val();
            inptArr.lga = $("#lga").val();
            inptArr.email = $("#email").val();
            inptArr.tely = $("#telephone").val();
            inptArr.code = $("#countryCode").val();
            $(".text-danger").html("");
            // valid = "Data-Valid"
            valid = field1(inptArr);

            if (valid == "Data-Valid") {
                counter[0] = indx + 1;
                $(prevField).css({ 'display': "none" });
                $(nextField).css({ 'display': 'block' });
                FieldsetName.html(fNames[indx + 1]);
                prevFieldset.removeClass("deactivated");


            } else {
                console.log(valid);
                valid[0].html(valid[1]);
            }

        } else if (indx == 1) {
            inptArr.sname = $("#sname").val();
            inptArr.los = $("#los").val();
            inptArr.class = $("#class").val();
            inptArr.saddress = $("#saddress").val();
            inptArr.sfees = $("#sfees").val();
            inptArr.sother = $("#sother").val();
            $(".text-danger").html("");
            // valid = "Data-Valid"
            valid = field2(inptArr);

            if (valid == "Data-Valid") {
                counter[0] = indx + 1;
                $(prevField).css({ 'display': "none" });
                $(nextField).css({ 'display': 'block' });
                FieldsetName.html(fNames[indx + 1]);
                prevFieldset.removeClass("deactivated");

            } else {
                console.log(valid);
                valid[0].html(valid[1]);
            }

        } else if (indx == 2) {

            if ($("#ptitle").val() == "Other") {
                inptArr.ptitle = $("#ptitle2").val();
            } else {
                inptArr.ptitle = $("#ptitle").val();
            }
            inptArr.pname = $("#pname").val();
            inptArr.pemail = $("#pemail").val();
            inptArr.ptel = $("#ptel").val();
            $(".text-danger").html("");
            // valid = "Data-Valid"
            valid = field3(inptArr);

            if (valid == "Data-Valid") {
                counter[0] = indx + 1;
                $(prevField).css({ 'display': "none" });
                $(nextField).css({ 'display': 'block' });
                FieldsetName.html(fNames[indx + 1]);
                prevFieldset.removeClass("deactivated");
                $(this).html("<i class='far fa-paper-plane'></i>Submit")


            } else {

                console.log(valid);
                valid[0].html(valid[1]);
            }
        } else if (indx == 3) {
            inptArr.story = $("#story").val();
            inptArr.goal = $("#goal").val();
            if ($("#bc")[0].files[0] === undefined) {
                inptArr.bc = "";
            } else {
                inptArr.bc = $("#bc")[0].files[0];
            }

            if (profilePic[0].files[0] === undefined) {
                inptArr.pp = "";
            } else {
                inptArr.pp = profilePic[0].files[0];
            }

            $(".text-danger").html("");
            // valid = "Data-Valid"
            valid = field4(inptArr);

            if (valid == "Data-Valid") {
                var fd = new FormData();
                fd.append("category", inptArr.category);
                fd.append("fname", inptArr.fname.charAt(0).toUpperCase() + inptArr.fname.substr(1).toLowerCase());
                fd.append("lname", inptArr.lname.charAt(0).toUpperCase() + inptArr.lname.substr(1).toLowerCase());
                fd.append("mname", inptArr.mname.charAt(0).toUpperCase() + inptArr.mname.substr(1).toLowerCase());
                fd.append("dob", inptArr.dob);
                fd.append("age", inptArr.age);
                fd.append("gender", inptArr.gender);
                var cix = $("#country").val().split("-");
                if (cix[1] == "" || cix[1] == undefined) {
                    fd.append("country", "Nigeria-131");
                } else {
                    fd.append("country", inptArr.country);
                }

                fd.append("state_o", inptArr.state_O);
                fd.append("state_r", inptArr.state_R);
                fd.append("lga", inptArr.lga);
                fd.append("email", inptArr.email);
                fd.append("tely", inptArr.code + "-" + inptArr.tely);
                fd.append("sname", inptArr.sname.charAt(0).toUpperCase() + inptArr.sname.substr(1).toLowerCase());
                fd.append("saddress", inptArr.saddress.charAt(0).toUpperCase() + inptArr.saddress.substr(1).toLowerCase());
                fd.append("los", inptArr.los);
                fd.append("class", inptArr.class);
                fd.append("sfees", inptArr.sfees);
                fd.append("sother", inptArr.sother);
                fd.append("pname", inptArr.pname.charAt(0).toUpperCase() + inptArr.pname.substr(1).toLowerCase());
                fd.append("ptitle", inptArr.ptitle.charAt(0).toUpperCase() + inptArr.ptitle.substr(1).toLowerCase());
                fd.append("pemail", inptArr.pemail);
                fd.append("ptel", inptArr.ptel);
                fd.append("story", inptArr.story);
                fd.append("goal", inptArr.goal);
                fd.append("bc", inptArr.bc);
                fd.append("pp", inptArr.pp);
                fd.append("title", "KDS")

                if (nextFieldset.attr("data-type") == "edit") {
                    fd.append("id", nextFieldset.attr("data-id"));
                }
                $.ajax({
                    url: url,
                    type: 'POST',
                    data: fd,
                    contentType: false,
                    processData: false,
                    beforeSend: function () {
                        Swal.fire({
                            title: 'Auto close alert!',
                            html: 'Please Hold on as details are uploaded, do not refresh.',
                            timer: 40000,
                            timerProgressBar: true,
                            showConfirmButton: false,
                            allowOutsideClick: false,
                        });
                    },
                    success: function (data) {
                        console.log(data.success);
                        if (data.success) {
                            modal.modal("hide");

                            if ($(this).attr("data-type") == "add") {
                                Swal.fire({
                                    icon: "success",
                                    title: data.success,
                                    text: "Click OK to proceed to Dashboard or Add to Add Another Sponsor",
                                    showCancelButton: true,
                                    confirmButtonText: `OK`,
                                    cancelButtonText: `Add`,
                                    allowOutsideClick: false,
                                }).then((result) => {
                                    if (result.value) {
                                        location.replace("/admin/Kids");
                                    } else {
                                        if (modal != undefined) {
                                            $("#addKidModalForm").modal("show");
                                            $("input, textarea, select").val("");
                                            $("#frame").attr('src', "");
                                            $(".prev").addClass("deactivated");
                                        } else {
                                            location.replace("/admin/Kids/add_kid");
                                        }
                                    }
                                });
                            } else {
                                Swal.fire({
                                    icon: "success",
                                    title: data.success,
                                    text: "Click OK to proceed to Dashboard or Edit to Edit Sponsor",
                                    showCancelButton: true,
                                    confirmButtonText: `OK`,
                                    cancelButtonText: `Add`,
                                    allowOutsideClick: false,
                                }).then((result) => {
                                    location.reload();
                                });
                            }

                        } else if (data.url) {
                            location.replace(data.url);
                        }
                        else {
                            swal.close();
                            fd = new FormData();
                            error.html("");
                            msg = "<span class='alert alert-success text-center'>" + data.error + "</span>";
                            error.html(msg);
                        }

                    }
                });
            } else {
                console.log(valid);
                valid[0].html(valid[1]);
            }
        }
    });

    //Function To Change Status
    status.on("change", function (e) {
        var ID = $(this).attr("id").split("-")[1];
        var value = $(this).val();
        var url = "/admin/Kids/chnage_status";
        var data = { id: ID, status: value };

        $.ajax({
            url: url,
            type: 'POST',
            data: data,
            beforeSend: function () {
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
                if (data.success) {
                    modal.modal("hide");
                    Swal.fire(data.success, "Click OK to Proceed", "success").then(
                        function () {
                            location.reload();
                        }
                    )
                } else if (data.url) {
                    location.replace(data.url);
                }
                else {
                    error.html("");
                    msg = "<span class='alert alert-success'>" + data.error + "</span>";
                    error.html(msg);
                }

            }
        });
    });

    //Function To Delete Image
    deleteImage.on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        profilePic.val("");
        $("#frame").attr("src", "");
        $(".filly").removeClass("deactivated");
        $(".prev").addClass("deactivated");

    });

    //Function To Delete File
    deleteFile.on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        $("#bc").val("");
        $(".path").html("");
        $(".dilly").removeClass("deactivated");
        $(".jev").addClass("deactivated");

    });

    //Function to edit Admin
    editKid.on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        var mdl = $("#addKidModalForm");
        var ID = $(this).attr("data-id");
        var url = $(this).attr("data-url");
        var type = $(this).attr("data-type").split("-");
        var data = { id: ID, type: type[0], mode: type[1] };

        $.ajax({
            url: url,
            type: 'POST',
            data: data,
            beforeSend: function () {
                Swal.fire({
                    title: 'Auto close alert!',
                    html: 'Please Hold on as Details are being Fetched.',
                    timer: 40000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    allowOutsideClick: false,
                });
            },
            success: function (data) {
                swal.close();

                console.log(data);
                if (data.success) {

                    if (type[1] == "modal") {
                        $(".card-modal-title").html(data.success.fname + " Kid Profile Form ");
                        $(".card-modal-description").html("Edit " + data.success.fname + "'s Kid Profile");
                        $("#category").val(data.success.category);
                        $("#fname").val(data.success.fname)
                        $("#lname").val(data.success.lname)
                        $("#mname").val(data.success.mname)
                        $("#dob").val(data.success.dob.split("T")[0]);
                        $("#age").val(data.success.age);
                        $("#gender").val(data.success.gender);
                        $("#country").val(data.success.country);
                        var cix = $("#country").val().split("-");
                        if (cix[1] == "" || cix[1] == undefined) {
                            var states = countries["131"].states;
                        } else {
                            var states = countries[cix[1]].states;
                        }
                        $("#state-o").empty();
                        $("#state-r").empty();
                        html_state = "<option value=''><!-----choose----></option>";

                        for (var u = 0; u < states.length; u++) {
                            var ste = states[u];
                            html_state += "<option value='" + ste + "'>" + ste + "</option>";
                        }

                        $("#state-o").append(html_state);
                        $("#state-r").append(html_state);
                        $("#state-o").val(data.success.state_o);
                        $("#state-r").val(data.success.state_r);
                        $("#lga").val(data.success.lga);
                        $("#email").val(data.success.email);
                        $("#telephone").val(data.success.telephone.split("-")[1]);
                        $("#countryCode").val(data.success.telephone.split("-")[0]);
                        $("#sname").val(data.success.school_name);
                        $("#los").val(data.success.los);
                        var cix = $("#los").val().split("-");
                        var classes = levels[cix[1]].class;
                        $("#class").empty();
                        html_class = "<option value=''><!-----choose----></option>";
                        for (var u = 0; u < classes.length; u++) {
                            var ste = classes[u];
                            html_class += "<option value='" + ste + "'>" + ste + "</option>";
                        }
                        $("#class").append(html_class);
                        $("#class").val(data.success.class);
                        $("#saddress").val(data.success.school_address);
                        $("#sfees").val(data.success.school_fees);
                        $("#sother").val(data.success.other_school_details);
                        $('#ptitle option').each(function () {
                            console.log(this.value);
                            if (this.value.trim() == data.success.parent_title.trim()) {
                                $("#ptitle").val(data.success.parent_title)
                            }
                        });

                        if ($("#ptitle").val() == "") {
                            $("#ptitle2").attr("type", "text");
                            $("#ptitle2").val(data.success.parent_title);
                        }

                        $("#pname").val(data.success.parent_name);
                        $("#pemail").val(data.success.parent_email);
                        $("#ptel").val(data.success.parent_telephone);
                        $("#story").val(data.success.story);
                        $("#goal").val(data.success.goal);

                        if (data.success.profile_photo) {
                            profilePic.val("");
                            $("#frame").attr("src", data.success.profile_photo);
                            $(".filly").addClass("deactivated");
                            $(".prev").removeClass("deactivated");
                        }
                        nextFieldset.attr("data-url", "/admin/kids/edit_profile");
                        nextFieldset.attr("data-type", "edit");
                        nextFieldset.attr("data-id", ID);
                        mdl.modal("show");
                    } else {
                        console.log(data.type);
                        var url = "/admin/Kids/edit_kid/" + ID;
                        location.replace(url);
                    }

                }


            }
        });

    });

    //Function to Delete Admin
    deleteKid.on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        var ID = $(this).attr("data-id");
        var url = $(this).attr("data-url");
        var data = { id: ID };

        Swal.fire({
            icon: 'question',
            title: 'Are you Sure you want to Delete ?',
            text: 'This will permanently delete this profile, click yes to confirm',
            showCancelButton: true,
            confirmButtonText: `Yes`,
            cancelButtonText: `No`,
            allowOutsideClick: false,
        }).then(async (result) => {
            if (result.value) {

                $.ajax({
                    url: url,
                    type: 'POST',
                    data: data,
                    beforeSend: function () {
                        Swal.fire({
                            title: 'Auto close alert!',
                            html: 'Please Hold on as Details are being Fetched.',
                            timer: 40000,
                            timerProgressBar: true,
                            showConfirmButton: false,
                            allowOutsideClick: false,
                        });
                    },
                    success: function (data) {
                        swal.close();
                        if (data.success) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Delete Operation Successful',
                                text: data.success,
                            }).then(
                                function () {
                                    location.reload();
                                }
                            );
                        } else if (data.url) {
                            location.replace(data.url);
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Delete Operation Un-successful',
                                text: data.error,
                            });
                        }
                    }
                });
            }
        });

    });

    //Function to Open Profile Modal
    profile.on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        var ID = $(this).attr("data-id");
        var url = $(this).attr("data-url");
        var mdl = $("#kidProfileModal");
        var type = $(this).attr("data-type").split("-");
        var data = { id: ID, type: type[0], mode: type[1] };

        $.ajax({
            url: url,
            type: 'POST',
            data: data,
            beforeSend: function () {
                Swal.fire({
                    title: 'Auto close alert!',
                    html: 'Please Hold on as Details are being Fetched.',
                    timer: 40000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    allowOutsideClick: false,
                });
            },
            success: function (data) {
                swal.close();
                if (data.success) {
                    var info = [{
                        'category': data.success.category,
                        'name': data.success.lname + " " + data.success.mname + " " + data.success.fname,
                        'D.O.B': data.success.dob.split("T")[0],
                        'age': data.success.age + " Yeras Old",
                        'gender': data.success.gender,
                        'country': data.success.country.split("-")[0] + ", " + data.success.state_o + " - " + data.success.state_r + "(" + data.success.lga + ")",
                        'email': "<a href='mailto:" + data.success.email + "'>" + data.success.email + "</a>",
                        'Tel': "<a href='tel:" + data.success.telephone + "'>" + data.success.telephone + "</a>",
                        'Home Address': data.success.address
                    },
                    {
                        "School Name": data.success.school_name,
                        "Level of study": data.success.los.split("-")[0] + " - " + data.success.class,
                        "School Address": data.success.school_address,
                        "School Fees": prettyCurrency(data.success.school_fees),
                        "Other Information": data.success.other_school_details,
                    },
                    {
                        "Parent Title": data.success.parent_title,
                        "Parent Name": data.success.parent_name,
                        "Parent Email": data.success.parent_email,
                        "Parent Tel": data.success.parent_telephone
                    },
                    {
                        "Date Joined": prettyDate(data.success.dob),
                        "Date of last Edit": prettyDate(data.success.last_edit),
                        "Created By": "<h6 class='text-danger'>" + data.success.created_by + "</h6>",
                        "Editted By": "<h6 class='text-danger'>" + data.success.editted_by + "</h6>",

                    }];

                    if (data.type == "modal") {
                        if (data.success.profile_photo != "") {
                            $(".avatar").attr('src', data.success.profile_photo);
                        } else {
                            $(".avatar").attr('src', '/images/profile/avatar/avatar.png');
                        }
                        $(".k-id").html("<h4>" + data.success.kid_id + "</h4>");

                        var data_html = "";
                        Object.keys(info[0]).forEach(function (key) {
                            var _html = `  <div class="data ml-3">
                                                <span>` + key + `</span>
                                                <div class="data-sub">
                                                    <span>`+ info[0][key] + `</span>
                                                </div>
                                            </div >`;
                            data_html += _html
                        });
                        $(".info").html(data_html);

                        var data_html = "";
                        Object.keys(info[1]).forEach(function (key) {
                            var _html = `  <div class="data ml-3">
                                                <span>` + key + `</span>
                                                <div class="data-sub">
                                                    <span>`+ info[1][key] + `</span>
                                                </div>
                                            </div >`;
                            data_html += _html
                        });
                        $(".s-info").html(data_html);

                        var data_html = "";
                        Object.keys(info[2]).forEach(function (key) {
                            var _html = `  <div class="data ml-3">
                                                <span>` + key + `</span>
                                                <div class="data-sub">
                                                    <span>`+ info[2][key] + `</span>
                                                </div>
                                            </div >`;
                            data_html += _html
                        });
                        $(".p-info").html(data_html);

                        var data_html = "";
                        Object.keys(info[3]).forEach(function (key) {
                            var _html = `  <div class="data ml-3">
                                                <span>` + key + `</span>
                                                <div class="data-sub">
                                                    <span>`+ info[3][key] + `</span>
                                                </div>
                                            </div >`;
                            data_html += _html
                        });
                        if (data.success.bc != "") {
                            var rarr = data.success.bc.split("/")
                            var name = rarr[rarr.length - 1];
                            var _html = `  <div class="data ml-3">
                                                <span>` + "Birth Certificate Doc" + `</span>
                                                <div class="data-sub">
                                                    <span class='text-info'>`+ name + `</span>
                                                </div>
                                            </div >`;
                            data_html += _html;
                        } else {
                            var _html = `  <div class="data ml-3">
                                                <span>` + "Birth Certificate Doc" + `</span>
                                                <div class="data-sub">
                                                    <span class='text-info'> No Doc </span>
                                                </div>
                                            </div >`;
                            data_html += _html;
                        }
                        $(".pro-info").html(data_html);

                        mdl.modal("show");
                    } else {
                        location.replace(data.success);
                    }

                } else if (data.url) {
                    location.replace(data.url);
                }


            }
        });
    });




});