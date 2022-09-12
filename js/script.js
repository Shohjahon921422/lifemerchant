function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function modal_close_open(close,open) {
    let modal = document.getElementById(close);
    let myModal = bootstrap.Modal.getOrCreateInstance(modal);
    myModal.hide();
    sleep(2000);
    let modalTwo = document.getElementById(open);
    let exampleModal = bootstrap.Modal.getOrCreateInstance(modalTwo);
    //window.setTimeout(_ => exampleModal.show(), 3000)
    exampleModal.show();
}


function modal_url_open(open,time){
    if(time){sleep(time);}
    let modalTwo = document.getElementById(open);
    let exampleModal = bootstrap.Modal.getOrCreateInstance(modalTwo);
    exampleModal.show();
}
function modal_show(open){
    if(open=='reg_ok'){
    //try{ym(00000,'reachGoal','reg');}catch(e){}
    }
    let modalTwo = document.getElementById(open);
    let exampleModal = bootstrap.Modal.getOrCreateInstance(modalTwo);
    exampleModal.show();
}

function user_registration(form){
    console.log('start_user_registration');
    console.log($(form).serialize());
    
    document.getElementById('user_registration_message').style.display = 'none';
    $.ajax({type: "POST",url: "/js.php",dataType: "json",cache: false,
    data: $(form).serialize(),
    success: function(data){
        console.log('data_user_registration');
        
        console.log(data);
        if(data.result=='ERR'){
            console.log('ERR');
            document.getElementById('user_registration_message').innerHTML = data.msg;
            document.getElementById('user_registration_message').style.display = 'block';
        }
        if(data.result=='OK'){
            location.href=location.href+'?modal=reg_ok&email_reg='+data.email;
            
            //location.href=location.href;
            //document.querySelector('.popup-wrapper__content.popup-wrapper__content_reg').style.display = 'none';
            //document.querySelector('.popup-wrapper__content.popup-wrapper__content_reg-thx').style.display = 'block';
            //$.ajax({type: "POST",url: "/js.php",dataType: "html",cache: false,data: {"vid_zapros": 'user_head_refresh'},success: function(data){
            //document.getElementById('user_head_refresh').innerHTML = data;
            
            }
        }
    });
   console.log('finish_user_registration');
};
function user_vhod(form){
    document.getElementById('user_vhod_message').style.display = 'none';
    $.ajax({type: "POST",url: "/js.php",dataType: "json",cache: false,
    data: $(form).serialize(),
    success: function(data){
        console.log(data);
        if(data.result=='ERR'){
            console.log('ERR');
            document.getElementById('user_vhod_message').innerHTML = data.msg;
            document.getElementById('user_vhod_message').style.display = 'block';
            console.log(data);
            
        }
        if(data.result=='OK'){
            //location.href=location.href;
            location.href='/cabinet';
            //closePopup('');
/*            $("#header-popup").hide();
            $.ajax({type: "POST",url: "/js.php",dataType: "html",cache: false,data: {"vid_zapros": 'user_head_refresh'},success: function(data){
            document.getElementById('user_head_refresh').innerHTML = data;
            console.log('user_head_refresh');
            }});*/
        }
    }});
};
function user_pass_reset(form){
    console.log('start_user_pass_reset');
    console.log($(form).serialize());
    
    document.getElementById('user_pass_reset_message').style.display = 'none';
    $.ajax({type: "POST",url: "/js.php",dataType: "json",cache: false,
    data: $(form).serialize(),
    success: function(data){
        console.log('data_user_pass_reset');
        
        console.log(data);
        if(data.result=='ERR'){
            console.log('ERR');
            document.getElementById('user_pass_reset_message').innerHTML = data.msg;
            document.getElementById('user_pass_reset_message').style.display = 'block';
        }
        if(data.result=='OK'){
            /*location.href=location.href;*/
            //document.querySelector('.popup-wrapper__content.popup-wrapper__content_reg').style.display = 'none';
            //document.querySelector('.popup-wrapper__content.popup-wrapper__content_reg-thx').style.display = 'block';
            //$.ajax({type: "POST",url: "/js.php",dataType: "html",cache: false,data: {"vid_zapros": 'user_head_refresh'},success: function(data){
            //document.getElementById('user_head_refresh').innerHTML = data;
            //location.href='https://betbol.ru/cabinet?modal=reg_ok';
            document.getElementById('user_pass_reset_ok_email').innerHTML = data.email;
            modal_close_open('user_pass_reset','user_pass_reset_ok')
            }
        }
    });
   console.log('finish_user_pass_reset');
};
function pass_user_smena(form){
    console.log('pass_user_smena');
    console.log($(form).serialize());
    
    document.getElementById('pass_user_smena_message').style.display = 'none';
    $.ajax({type: "POST",url: "/js.php",dataType: "json",cache: false,
    data: $(form).serialize(),
    success: function(data){
        console.log('data_pass_user_smena');
        
        console.log(data);
        if(data.result=='ERR'){
            console.log('ERR');
            document.getElementById('pass_user_smena_message').innerHTML = data.msg;
            document.getElementById('pass_user_smena_message').style.display = 'block';
        }
        if(data.result=='OK'){
            document.getElementById('modal_pass_smena_ok_email').innerHTML = data.email;
            modal_close_open('modal_pass_user_smena','modal_pass_smena_ok')
            //location.href=location.href+'?modal=reg_ok&email_reg='+data.email;
            
            //location.href=location.href;
            //document.querySelector('.popup-wrapper__content.popup-wrapper__content_reg').style.display = 'none';
            //document.querySelector('.popup-wrapper__content.popup-wrapper__content_reg-thx').style.display = 'block';
            //$.ajax({type: "POST",url: "/js.php",dataType: "html",cache: false,data: {"vid_zapros": 'user_head_refresh'},success: function(data){
            //document.getElementById('user_head_refresh').innerHTML = data;
            
            }
        }
    });
   console.log('finish_pass_user_smena');
};


$(document).ready(function() {

    
});

function sendAjaxForm(result_form, ajax_form_data, url, data_type) {

    //document.getElementById('modal_kontakty_message_err_text').innerHTML = '';
    $.ajax({
        type: "POST",
        url:  url,
        dataType: data_type,
        cache: false,
        data: ajax_form_data,
        success: function(data){
            if (data.result=='OK'){
                // элемент, содержащий контент модального окна (например, имеющий id="modal")
                const elemModal = document.querySelector('#modal_message');
                const modal = new bootstrap.Modal(elemModal);
                // установим .modal-title содержимое html
                elemModal.querySelector('.modal-title').innerHTML = data.title;
                // установим .modal-body содержимое html
                elemModal.querySelector('.modal-body').innerHTML = data.html;
                // рисуем кнопку закрытия если надо
                if(data.button_footer == 1){
                    var button_footer = document.createElement('div');
                    button_footer.className = 'modal-footer justify-content-center';
                    button_footer.innerHTML = '<button type="button" class="btn btn2-success rounded-pill header-btn" data-bs-dismiss="modal">Ok</button>';
                    elemModal.querySelector('.modal-content').append(button_footer);
                }
                if(data.html > ''){
                // откроем модальное окно
                modal.show();
                }
                //После закрытия, очищаем переменные
                elemModal.addEventListener('hide.bs.modal', function(e) {
                    elemModal.querySelector('.modal-title').innerHTML = '';
                    elemModal.querySelector('.modal-body').innerHTML = '';
                    if(data.button_footer == 1 && elemModal.querySelector('.modal-content .modal-footer')){
                        elemModal.querySelector('.modal-content .modal-footer').remove();
                    }
                });
                
                
                //document.getElementById('form_'+ajax_form_data.vid_zapros).reset();
                
            }
            if (data.result=='ERR'){
                // элемент, содержащий контент модального окна (например, имеющий id="modal")
                const elemModal = document.querySelector('#modal_message');
                const modal = new bootstrap.Modal(elemModal);
                // установим .modal-title содержимое html
                elemModal.querySelector('.modal-title').innerHTML = data.title;
                // установим .modal-body содержимое html
                elemModal.querySelector('.modal-body').innerHTML = data.html;
                // рисуем кнопку закрытия если надо
                if(data.button_footer == 1){
                    var button_footer = document.createElement('div');
                    button_footer.className = 'modal-footer justify-content-center';
                    button_footer.innerHTML = '<button type="button" class="btn btn2-success rounded-pill header-btn" data-bs-dismiss="modal">Ok</button>';
                    elemModal.querySelector('.modal-content').append(button_footer);
                }
                if(data.html > ''){
                // откроем модальное окно
                modal.show();
                }
                //После закрытия, очищаем переменные
                elemModal.addEventListener('hide.bs.modal', function(e) {
                    elemModal.querySelector('.modal-title').innerHTML = '';
                    elemModal.querySelector('.modal-body').innerHTML = '';
                    if(data.button_footer == 1 && elemModal.querySelector('.modal-content .modal-footer')){
                        elemModal.querySelector('.modal-content .modal-footer').remove();
                    }
                });
            }
            if (data.result==0){
            //
            }
            console.log(data);
        },
        error: function(response) {// Ошибка обработки формы
            console.log(response);
            //$('#result_form').html('РћС€РёР±РєР°. Р”Р°РЅРЅС‹Рµ РЅРµ РѕС‚РїСЂР°РІР»РµРЅС‹.');
            //document.getElementById('kontakty_message_text').value = '';
            //document.getElementById('kontakty_message_email').value = '';
        }
    });
}
function form_shop_new_button(page, text) {
    document.getElementById('shop_new_list').innerHTML = '<tr><td colspan="5"  class="text-center py-3"><div class="spinner-border" style="width: 3rem; height: 3rem;" role="status"><span class="visually-hidden">Загрузка...</span></div></td></tr>';
    $.ajax({type: "POST",url: "/js.php",dataType: "json",cache: false,
    data: {"vid_zapros": "form_shop_new","page":page,"text":text},
    success: function(data){
            if (data.result=='OK'){
                document.getElementById('shop_new_list').innerHTML = data.html;
            }
            if (data.result=='ERR'){
                document.getElementById('shop_new_list').innerHTML = '<tr><td colspan="5"  class="text-center py-3">Здесь отображается список магазинов</td></tr>';

                // элемент, содержащий контент модального окна (например, имеющий id="modal")
                const elemModal = document.querySelector('#modal_message');
                const modal = new bootstrap.Modal(elemModal);
                // установим .modal-title содержимое html
                elemModal.querySelector('.modal-title').innerHTML = data.title;
                // установим .modal-body содержимое html
                elemModal.querySelector('.modal-body').innerHTML = data.html;
                // рисуем кнопку закрытия если надо
                if(data.button_footer == 1){
                    var button_footer = document.createElement('div');
                    button_footer.className = 'modal-footer justify-content-center';
                    button_footer.innerHTML = '<button type="button" class="btn btn2-success rounded-pill header-btn" data-bs-dismiss="modal">Ok</button>';
                    elemModal.querySelector('.modal-content').append(button_footer);
                }
                if(data.html > ''){
                // откроем модальное окно
                modal.show();
                }
                //После закрытия, очищаем переменные
                elemModal.addEventListener('hide.bs.modal', function(e) {
                    elemModal.querySelector('.modal-title').innerHTML = '';
                    elemModal.querySelector('.modal-body').innerHTML = '';
                    if(data.button_footer == 1 && elemModal.querySelector('.modal-content .modal-footer')){
                        elemModal.querySelector('.modal-content .modal-footer').remove();
                    }
                });
            }
            console.log(data);
        },
        error: function(response) {// Ошибка обработки формы
            console.log(response);
            //$('#result_form').html('РћС€РёР±РєР°. Р”Р°РЅРЅС‹Рµ РЅРµ РѕС‚РїСЂР°РІР»РµРЅС‹.');
            //document.getElementById('kontakty_message_text').value = '';
            //document.getElementById('kontakty_message_email').value = '';
        }
    });
}


function shop_edit_tovar_statys_on(shop_user,shop_tip,shop_id,shop_tovar_id) {
//$(".shop_edit_tovar_statys_on").on("click", function(e){
/*    var shop_user = '';
    var shop_tip = '';
    var shop_id = '';
    var shop_tovar_id = '';
    
    
    if(this.hasAttribute('user')){shop_user = this.getAttribute('user');}
    if(this.hasAttribute('tip')){shop_tip = this.getAttribute('tip');}
    if(this.hasAttribute('shop_id')){shop_id = this.getAttribute('shop_id');}
    if(this.hasAttribute('idd')){shop_tovar_id = this.getAttribute('idd');}*/
    
    //document.getElementById('shop_edit_tovarnew_err').innerHTML = '';
    //if(document.getElementById('shop_edit_tovarnew_url').classList.contains('is-invalid')){document.getElementById('shop_edit_tovarnew_url').classList.remove("is-invalid");}
    
    $.ajax({type: "POST",url: "/js.php",dataType: "json",cache: false,
    data: {"vid_zapros": "shop_edit_tovar_statys_on","shop_user":shop_user,"shop_tip":shop_tip,"shop_id":shop_id,"shop_tovar_id":shop_tovar_id},
    success: function(data){
            if (data.result=='OK'){
                document.getElementById('shop_edit_tovar_statystext_'+shop_tovar_id).innerHTML = 'Включен';
                document.getElementById('shop_edit_tovar_statys_'+shop_tovar_id).innerHTML = '<a idd="'+shop_tovar_id+'" shop_id="'+shop_id+'" tip="'+shop_tip+'" user="'+shop_user+'" class="btn btn-sm shop_edit_tovar_statys_off btn-outline-success " onclick="shop_edit_tovar_statys_off('+"'"+shop_user+"'"+','+"'"+shop_tip+"'"+','+"'"+shop_id+"'"+','+"'"+shop_tovar_id+"'"+')"><i class="bi bi-lightbulb"></i></a>';
                if (data.tovar_activ>''){document.getElementById('shop_edit_tovar_activ').innerHTML = data.tovar_activ;}




/*                let modal = document.getElementById('modal_shop_edit_tovarnew');
                let myModal = bootstrap.Modal.getOrCreateInstance(modal);
                myModal.hide();
                sleep(2000);
                let modalTwo = document.getElementById('modal_message');
                let exampleModal = bootstrap.Modal.getOrCreateInstance(modalTwo);
                // элемент, содержащий контент модального окна (например, имеющий id="modal")
                const elemModal = document.querySelector('#modal_message');
                //const modal = new bootstrap.Modal(elemModal);
                // установим .modal-title содержимое html
                elemModal.querySelector('.modal-title').innerHTML = data.title;
                // установим .modal-body содержимое html
                elemModal.querySelector('.modal-body').innerHTML = data.html;
                // рисуем кнопку закрытия если надо
                if(data.button_footer == 1){
                    var button_footer = document.createElement('div');
                    button_footer.className = 'modal-footer justify-content-center';
                    button_footer.innerHTML = '<button type="button" class="btn btn2-success rounded-pill header-btn" data-bs-dismiss="modal">Ok</button>';
                    elemModal.querySelector('.modal-content').append(button_footer);
                }
                if(data.html > ''){
                // откроем модальное окно
                //modal.show();
                exampleModal.show();
                }
                //После закрытия, очищаем переменные
                elemModal.addEventListener('hide.bs.modal', function(e) {
                    elemModal.querySelector('.modal-title').innerHTML = '';
                    elemModal.querySelector('.modal-body').innerHTML = '';
                    if(data.button_footer == 1 && elemModal.querySelector('.modal-content .modal-footer')){
                        elemModal.querySelector('.modal-content .modal-footer').remove();
                    }
                });*/
            }
            if (data.result=='ERR'){
                //document.getElementById('shop_new_list').innerHTML = '<tr><td colspan="5"  class="text-center py-3">Здесь отображается список магазинов</td></tr>';

                // элемент, содержащий контент модального окна (например, имеющий id="modal")
                const elemModal = document.querySelector('#modal_message');
                const modal = new bootstrap.Modal(elemModal);
                // установим .modal-title содержимое html
                elemModal.querySelector('.modal-title').innerHTML = data.title;
                // установим .modal-body содержимое html
                elemModal.querySelector('.modal-body').innerHTML = data.html;
                // рисуем кнопку закрытия если надо
                if(data.button_footer == 1){
                    var button_footer = document.createElement('div');
                    button_footer.className = 'modal-footer justify-content-center';
                    button_footer.innerHTML = '<button type="button" class="btn btn2-success rounded-pill header-btn" data-bs-dismiss="modal">Ok</button>';
                    elemModal.querySelector('.modal-content').append(button_footer);
                }
                if(data.html > ''){
                // откроем модальное окно
                modal.show();
                }
                //После закрытия, очищаем переменные
                elemModal.addEventListener('hide.bs.modal', function(e) {
                    elemModal.querySelector('.modal-title').innerHTML = '';
                    elemModal.querySelector('.modal-body').innerHTML = '';
                    if(data.button_footer == 1 && elemModal.querySelector('.modal-content .modal-footer')){
                        elemModal.querySelector('.modal-content .modal-footer').remove();
                    }
                });
            }
            console.log(data);
        },
        error: function(response) {// Ошибка обработки формы
            console.log(response);
            //$('#result_form').html('РћС€РёР±РєР°. Р”Р°РЅРЅС‹Рµ РЅРµ РѕС‚РїСЂР°РІР»РµРЅС‹.');
            //document.getElementById('kontakty_message_text').value = '';
            //document.getElementById('kontakty_message_email').value = '';
        }
    });
//});
}
function shop_edit_tovar_statys_off(shop_user,shop_tip,shop_id,shop_tovar_id) {
//$(".shop_edit_tovar_statys_off").on("click", function(e){
/*    var shop_user = '';
    var shop_tip = '';
    var shop_id = '';
    var shop_tovar_id = '';
    
    
    if(this.hasAttribute('user')){shop_user = this.getAttribute('user');}
    if(this.hasAttribute('tip')){shop_tip = this.getAttribute('tip');}
    if(this.hasAttribute('shop_id')){shop_id = this.getAttribute('shop_id');}
    if(this.hasAttribute('idd')){shop_tovar_id = this.getAttribute('idd');}*/
    
    //document.getElementById('shop_edit_tovarnew_err').innerHTML = '';
    //if(document.getElementById('shop_edit_tovarnew_url').classList.contains('is-invalid')){document.getElementById('shop_edit_tovarnew_url').classList.remove("is-invalid");}
    
    $.ajax({type: "POST",url: "/js.php",dataType: "json",cache: false,
    data: {"vid_zapros": "shop_edit_tovar_statys_off","shop_user":shop_user,"shop_tip":shop_tip,"shop_id":shop_id,"shop_tovar_id":shop_tovar_id},
    success: function(data){
            if (data.result=='OK'){
                document.getElementById('shop_edit_tovar_statystext_'+shop_tovar_id).innerHTML = 'Отключен';
                document.getElementById('shop_edit_tovar_statys_'+shop_tovar_id).innerHTML = '<a idd="'+shop_tovar_id+'" shop_id="'+shop_id+'" tip="'+shop_tip+'" user="'+shop_user+'" class="btn btn-sm shop_edit_tovar_statys_on btn-outline-danger " onclick="shop_edit_tovar_statys_on('+"'"+shop_user+"'"+','+"'"+shop_tip+"'"+','+"'"+shop_id+"'"+','+"'"+shop_tovar_id+"'"+')"><i class="bi bi-lightbulb-off"></i></a>';
                if (data.tovar_activ>''){document.getElementById('shop_edit_tovar_activ').innerHTML = data.tovar_activ;}
/*                let modal = document.getElementById('modal_shop_edit_tovarnew');
                let myModal = bootstrap.Modal.getOrCreateInstance(modal);
                myModal.hide();
                sleep(2000);
                let modalTwo = document.getElementById('modal_message');
                let exampleModal = bootstrap.Modal.getOrCreateInstance(modalTwo);
                // элемент, содержащий контент модального окна (например, имеющий id="modal")
                const elemModal = document.querySelector('#modal_message');
                //const modal = new bootstrap.Modal(elemModal);
                // установим .modal-title содержимое html
                elemModal.querySelector('.modal-title').innerHTML = data.title;
                // установим .modal-body содержимое html
                elemModal.querySelector('.modal-body').innerHTML = data.html;
                // рисуем кнопку закрытия если надо
                if(data.button_footer == 1){
                    var button_footer = document.createElement('div');
                    button_footer.className = 'modal-footer justify-content-center';
                    button_footer.innerHTML = '<button type="button" class="btn btn2-success rounded-pill header-btn" data-bs-dismiss="modal">Ok</button>';
                    elemModal.querySelector('.modal-content').append(button_footer);
                }
                if(data.html > ''){
                // откроем модальное окно
                //modal.show();
                exampleModal.show();
                }
                //После закрытия, очищаем переменные
                elemModal.addEventListener('hide.bs.modal', function(e) {
                    elemModal.querySelector('.modal-title').innerHTML = '';
                    elemModal.querySelector('.modal-body').innerHTML = '';
                    if(data.button_footer == 1 && elemModal.querySelector('.modal-content .modal-footer')){
                        elemModal.querySelector('.modal-content .modal-footer').remove();
                    }
                });*/
            }
            if (data.result=='ERR'){
                //document.getElementById('shop_new_list').innerHTML = '<tr><td colspan="5"  class="text-center py-3">Здесь отображается список магазинов</td></tr>';

                // элемент, содержащий контент модального окна (например, имеющий id="modal")
                const elemModal = document.querySelector('#modal_message');
                const modal = new bootstrap.Modal(elemModal);
                // установим .modal-title содержимое html
                elemModal.querySelector('.modal-title').innerHTML = data.title;
                // установим .modal-body содержимое html
                elemModal.querySelector('.modal-body').innerHTML = data.html;
                // рисуем кнопку закрытия если надо
                if(data.button_footer == 1){
                    var button_footer = document.createElement('div');
                    button_footer.className = 'modal-footer justify-content-center';
                    button_footer.innerHTML = '<button type="button" class="btn btn2-success rounded-pill header-btn" data-bs-dismiss="modal">Ok</button>';
                    elemModal.querySelector('.modal-content').append(button_footer);
                }
                if(data.html > ''){
                // откроем модальное окно
                modal.show();
                }
                //После закрытия, очищаем переменные
                elemModal.addEventListener('hide.bs.modal', function(e) {
                    elemModal.querySelector('.modal-title').innerHTML = '';
                    elemModal.querySelector('.modal-body').innerHTML = '';
                    if(data.button_footer == 1 && elemModal.querySelector('.modal-content .modal-footer')){
                        elemModal.querySelector('.modal-content .modal-footer').remove();
                    }
                });
            }
            console.log(data);
        },
        error: function(response) {// Ошибка обработки формы
            console.log(response);
            //$('#result_form').html('РћС€РёР±РєР°. Р”Р°РЅРЅС‹Рµ РЅРµ РѕС‚РїСЂР°РІР»РµРЅС‹.');
            //document.getElementById('kontakty_message_text').value = '';
            //document.getElementById('kontakty_message_email').value = '';
        }
    });
//});
};





window.onload = function(){ 
    

    
$("#form_shop_new_button").on("click", function(e){
    document.getElementById('shop_new_list').innerHTML = '<tr><td colspan="5"  class="text-center py-3"><div class="spinner-border" style="width: 3rem; height: 3rem;" role="status"><span class="visually-hidden">Загрузка...</span></div></td></tr>';
    $.ajax({type: "POST",url: "/js.php",dataType: "json",cache: false,
    data: $("#"+'form_shop_new').serialize(),
    success: function(data){
            if (data.result=='OK'){
                document.getElementById('shop_new_list').innerHTML = data.html;
            }
            if (data.result=='ERR'){
                document.getElementById('shop_new_list').innerHTML = '<tr><td colspan="5"  class="text-center py-3">Здесь отображается список магазинов</td></tr>';

                // элемент, содержащий контент модального окна (например, имеющий id="modal")
                const elemModal = document.querySelector('#modal_message');
                const modal = new bootstrap.Modal(elemModal);
                // установим .modal-title содержимое html
                elemModal.querySelector('.modal-title').innerHTML = data.title;
                // установим .modal-body содержимое html
                elemModal.querySelector('.modal-body').innerHTML = data.html;
                // рисуем кнопку закрытия если надо
                if(data.button_footer == 1){
                    var button_footer = document.createElement('div');
                    button_footer.className = 'modal-footer justify-content-center';
                    button_footer.innerHTML = '<button type="button" class="btn btn2-success rounded-pill header-btn" data-bs-dismiss="modal">Ok</button>';
                    elemModal.querySelector('.modal-content').append(button_footer);
                }
                if(data.html > ''){
                // откроем модальное окно
                modal.show();
                }
                //После закрытия, очищаем переменные
                elemModal.addEventListener('hide.bs.modal', function(e) {
                    elemModal.querySelector('.modal-title').innerHTML = '';
                    elemModal.querySelector('.modal-body').innerHTML = '';
                    if(data.button_footer == 1 && elemModal.querySelector('.modal-content .modal-footer')){
                        elemModal.querySelector('.modal-content .modal-footer').remove();
                    }
                });
            }
            console.log(data);
        },
        error: function(response) {// Ошибка обработки формы
            console.log(response);
            //$('#result_form').html('РћС€РёР±РєР°. Р”Р°РЅРЅС‹Рµ РЅРµ РѕС‚РїСЂР°РІР»РµРЅС‹.');
            //document.getElementById('kontakty_message_text').value = '';
            //document.getElementById('kontakty_message_email').value = '';
        }
    });
});
if(document.querySelector("#shop_new_manual_select")){
    document.querySelector("#shop_new_manual_select").addEventListener('change', function (e) {
        document.getElementById('shop_new_manual_warning').innerHTML = '';
        //console.log("Changed to: " + e.target.value);
        
        if(e.target.value=='kaspi'){
            document.getElementById('shop_new_manual_warning').innerHTML = '<br><b>Пример:</b> https://kaspi.kz/shop/info/merchant/*******';
        }
        
        
    });
}
$("#shop_new_manual_button").on("click", function(e){
    shop_user = document.getElementById("shop_new_manual_user").value;
    shop_tip =  document.getElementById("shop_new_manual_select").value;
    shop_name = document.getElementById("shop_new_manual_name").value;
    shop_url =  document.getElementById("shop_new_manual_url").value;
    vid_zapros =  document.getElementById("shop_new_vid_zapros").value;
    document.getElementById('shop_new_manual_err').innerHTML = '';
    
    
    if(document.getElementById('shop_new_manual_select').classList.contains('is-invalid')){document.getElementById('shop_new_manual_select').classList.remove("is-invalid");}
    if(document.getElementById('shop_new_manual_url').classList.contains('is-invalid')){document.getElementById('shop_new_manual_url').classList.remove("is-invalid");}
    
    $.ajax({type: "POST",url: "/js.php",dataType: "json",cache: false,
    data: {"vid_zapros": vid_zapros,"shop_user":shop_user,"shop_tip":shop_tip,"shop_name":shop_name,"shop_url":shop_url},
    success: function(data){
            if (data.result=='OK'){
                let modal = document.getElementById('shop_new_manual');
                let myModal = bootstrap.Modal.getOrCreateInstance(modal);
                myModal.hide();
                sleep(2000);
                let modalTwo = document.getElementById('modal_message');
                let exampleModal = bootstrap.Modal.getOrCreateInstance(modalTwo);
                // элемент, содержащий контент модального окна (например, имеющий id="modal")
                const elemModal = document.querySelector('#modal_message');
                //const modal = new bootstrap.Modal(elemModal);
                // установим .modal-title содержимое html
                elemModal.querySelector('.modal-title').innerHTML = data.title;
                // установим .modal-body содержимое html
                elemModal.querySelector('.modal-body').innerHTML = data.html;
                // рисуем кнопку закрытия если надо
                if(data.button_footer == 1){
                    var button_footer = document.createElement('div');
                    button_footer.className = 'modal-footer justify-content-center';
                    button_footer.innerHTML = '<button type="button" class="btn btn2-success rounded-pill header-btn" data-bs-dismiss="modal">Ok</button>';
                    elemModal.querySelector('.modal-content').append(button_footer);
                }
                if(data.html > ''){
                // откроем модальное окно
                //modal.show();
                exampleModal.show();
                }
                //После закрытия, очищаем переменные
                elemModal.addEventListener('hide.bs.modal', function(e) {
                    elemModal.querySelector('.modal-title').innerHTML = '';
                    elemModal.querySelector('.modal-body').innerHTML = '';
                    if(data.button_footer == 1 && elemModal.querySelector('.modal-content .modal-footer')){
                        elemModal.querySelector('.modal-content .modal-footer').remove();
                    }
                });
            }
            if (data.result=='ERR'){
                document.getElementById('shop_new_manual_err').innerHTML = '<div class="alert alert-danger" role="alert">'+data.html+'</div>';
                if (data.fl_tip=='1'){document.getElementById('shop_new_manual_select').classList.add("is-invalid");}
                if (data.fl_url=='1'){document.getElementById('shop_new_manual_url').classList.add("is-invalid");}
            }
            console.log(data);
        },
        error: function(response) {// Ошибка обработки формы
            console.log(response);
            //$('#result_form').html('РћС€РёР±РєР°. Р”Р°РЅРЅС‹Рµ РЅРµ РѕС‚РїСЂР°РІР»РµРЅС‹.');
            //document.getElementById('kontakty_message_text').value = '';
            //document.getElementById('kontakty_message_email').value = '';
        }
    });
});
$("#shop_edit_tovarnew_button").on("click", function(e){
    shop_user = document.getElementById("shop_edit_tovarnew_user").value;
    shop_tip =  document.getElementById("shop_edit_tovarnew_tip").value;
    shop_url =  document.getElementById("shop_edit_tovarnew_url").value;
    shop_id = document.getElementById("shop_edit_tovarnew_id_shop").value;
    
    document.getElementById('shop_edit_tovarnew_err').innerHTML = '';
    
    
    if(document.getElementById('shop_edit_tovarnew_url').classList.contains('is-invalid')){document.getElementById('shop_edit_tovarnew_url').classList.remove("is-invalid");}
    
    $.ajax({type: "POST",url: "/js.php",dataType: "json",cache: false,
    data: {"vid_zapros": "shop_edit_tovarnew","shop_user":shop_user,"shop_tip":shop_tip,"shop_url":shop_url,"shop_id":shop_id},
    success: function(data){
            if (data.result=='OK'){
                let modal = document.getElementById('modal_shop_edit_tovarnew');
                let myModal = bootstrap.Modal.getOrCreateInstance(modal);
                myModal.hide();
                sleep(2000);
                let modalTwo = document.getElementById('modal_message');
                let exampleModal = bootstrap.Modal.getOrCreateInstance(modalTwo);
                // элемент, содержащий контент модального окна (например, имеющий id="modal")
                const elemModal = document.querySelector('#modal_message');
                //const modal = new bootstrap.Modal(elemModal);
                // установим .modal-title содержимое html
                elemModal.querySelector('.modal-title').innerHTML = data.title;
                // установим .modal-body содержимое html
                elemModal.querySelector('.modal-body').innerHTML = data.html;
                // рисуем кнопку закрытия если надо
                if(data.button_footer == 1){
                    var button_footer = document.createElement('div');
                    button_footer.className = 'modal-footer justify-content-center';
                    button_footer.innerHTML = '<button type="button" class="btn btn2-success rounded-pill header-btn" data-bs-dismiss="modal">Ok</button>';
                    elemModal.querySelector('.modal-content').append(button_footer);
                }
                if(data.html > ''){
                // откроем модальное окно
                //modal.show();
                exampleModal.show();
                }
                //После закрытия, очищаем переменные
                elemModal.addEventListener('hide.bs.modal', function(e) {
                    elemModal.querySelector('.modal-title').innerHTML = '';
                    elemModal.querySelector('.modal-body').innerHTML = '';
                    if(data.button_footer == 1 && elemModal.querySelector('.modal-content .modal-footer')){
                        elemModal.querySelector('.modal-content .modal-footer').remove();
                    }
                });
            }
            if (data.result=='ERR'){
                document.getElementById('shop_edit_tovarnew_err').innerHTML = '<div class="alert alert-danger" role="alert">'+data.html+'</div>';
                if (data.fl_url=='1'){document.getElementById('shop_edit_tovarnew_url').classList.add("is-invalid");}
            }
            console.log(data);
        },
        error: function(response) {// Ошибка обработки формы
            console.log(response);
            //$('#result_form').html('РћС€РёР±РєР°. Р”Р°РЅРЅС‹Рµ РЅРµ РѕС‚РїСЂР°РІР»РµРЅС‹.');
            //document.getElementById('kontakty_message_text').value = '';
            //document.getElementById('kontakty_message_email').value = '';
        }
    });
});

if(document.querySelector(".check-input-statistic") !== null){
$(".check-input-statistic").on("click", function(e){
    input_statistic = document.getElementsByClassName('check-input-statistic');
    var count = 0;
    for(var i=0; i<input_statistic.length;i++){
        if (input_statistic[i].checked) {
        count++;
        }
        input_statistic[i].removeAttribute("disabled");
    }
    if(count>2){
    for(var i=0; i<input_statistic.length;i++){
        if (input_statistic[i].checked) {}else{
            input_statistic[i].setAttribute("disabled", "disabled");
        }
    }
    }
    //alert(count)
});
}
if(document.querySelector(".check-shop-deistvie") !== null){
$(".check-shop-deistvie").on("click", function(e){
    //alert(this.getAttribute("name"));
    
    input_statistic = document.getElementsByClassName('check-shop-deistvie');
    var count = 0;
    for(var i=0; i<input_statistic.length;i++){
        //if (input_statistic[i].checked) {count++;}
        if (input_statistic[i].checked) {count++;}
        //input_statistic[i].removeAttribute("disabled");
    }
    if(count>1){
        //alert(count);
        this.checked=false;
        //modal_show("modal_message");
        
                let modalTwo = document.getElementById('modal_message');
                let exampleModal = bootstrap.Modal.getOrCreateInstance(modalTwo);
                // элемент, содержащий контент модального окна (например, имеющий id="modal")
                const elemModal = document.querySelector('#modal_message');
                //const modal = new bootstrap.Modal(elemModal);
                // установим .modal-title содержимое html
                elemModal.querySelector('.modal-title').innerHTML = "Запрещенное действие";
                // установим .modal-body содержимое html
                elemModal.querySelector('.modal-body').innerHTML = "Разрешено выбрать только одно автоматическое действие.";
                // рисуем кнопку закрытия если надо
                    var button_footer = document.createElement('div');
                    button_footer.className = 'modal-footer justify-content-center';
                    button_footer.innerHTML = '<button type="button" class="btn btn-primary header-btn" data-bs-dismiss="modal">Ok</button>';
                    elemModal.querySelector('.modal-content').append(button_footer);
        exampleModal.show();
        
                //После закрытия, очищаем переменные
                elemModal.addEventListener('hide.bs.modal', function(e) {
                    elemModal.querySelector('.modal-title').innerHTML = '';
                    elemModal.querySelector('.modal-body').innerHTML = '';

                        elemModal.querySelector('.modal-content .modal-footer').remove();
                });
        
        
/*    for(var i=0; i<input_statistic.length;i++){
        if (input_statistic[i].checked) {}else{
            input_statistic[i].setAttribute("disabled", "disabled");
        }
    }*/
    
    }
    
    
    //alert(count)
});


}

if(document.querySelector("#pay_tarif_select")){
    document.querySelector("#pay_tarif_select").addEventListener('change', function (e) {
        if(e.target.value>'' && Object.keys(json_tarif).length>0){
            //console.log(json_tarif);
            //console.log(json_tarif[e.target.value]);
            for (tarif_list in json_tarif[e.target.value]) {
                
                console.log(json_tarif[e.target.value][tarif_list]);
                //console.log(tarif_list);
                console.log(json_tarif[e.target.value][tarif_list].srok);
                
                //if(json_tarif[e.target.value][tarif_list].srok){
                tarif_srok = '';
                if(json_tarif[e.target.value][tarif_list].srok == '1_month'){tarif_srok = '1 месяц';}
                if(json_tarif[e.target.value][tarif_list].srok == '3_month'){tarif_srok = '3 месяца';}
                if(json_tarif[e.target.value][tarif_list].srok == '6_month'){tarif_srok = '6 месяцев';}

document.getElementById('pay_tarif_box_'+ json_tarif[e.target.value][tarif_list].srok +'_head_name').innerHTML = tarif_srok;
document.getElementById('pay_tarif_box_'+ json_tarif[e.target.value][tarif_list].srok +'_head_price').innerHTML = Intl.NumberFormat('ru-RU').format(json_tarif[e.target.value][tarif_list].price);
document.getElementById('pay_tarif_box_'+ json_tarif[e.target.value][tarif_list].srok +'_info_name').innerHTML = json_tarif[e.target.value][tarif_list].name;
document.getElementById('pay_tarif_box_'+ json_tarif[e.target.value][tarif_list].srok +'').setAttribute("href", "/cabinet/pay/"+json_tarif[e.target.value][tarif_list].shop+"/"+json_tarif[e.target.value][tarif_list].id);
if(json_tarif[e.target.value][tarif_list].price_econom>0){
document.getElementById('pay_tarif_box_'+ json_tarif[e.target.value][tarif_list].srok +'_info_price_econom').innerHTML = 'Экономия: '+Intl.NumberFormat('ru-RU').format(json_tarif[e.target.value][tarif_list].price_econom);
}
                    
                    
                    console.log(json_tarif[e.target.value][tarif_list].srok);

                //}
                
                
            }
            //var json_tarif_js = JSON.parse(json_tarif);
            //alert(json_tarif['50']);
            
            //for (json_tarif[e.target.value] in json_t) {
            //    alert(json_t.srok);
            
            //}
            




        }else{
            alert('Произошла ошибка, перезагрузите страницу!');
        }
    });
}


//window.onload
};


if(document.querySelector(".popover-dismiss") !== null){

const popover = new bootstrap.Popover('.popover-dismiss', {
  trigger: 'focus'
})

}



$(document).ready(function() {

    $("#form_support_button").click(
		function(){
			sendAjaxForm('result_form',$("#"+'form_support').serialize(),'/js.php','json',);
			return false; 
		}
	);
    $("#form_individual_project_button").click(
		function(){
			sendAjaxForm('result_form',$("#"+'form_individual_project').serialize(),'/js.php','json',);
			return false; 
		}
	);
});



