canvas=document.getElementById("myCanvas");
ctx = canvas.getcontext("2D");
var mouseEvent="empty";
var last_position_of_x,last_position_of_y;
color = "Black";
widthofline = 1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    color=document.getElementById("color").value;
    widthofline=document.getElementById(widthofline).value;
    mouseEvent ="mouseDown";
}
canvas.addEventListener("mouseLeave", my_mouseLeave);
function my_mouseLeave(e){
    mouseEvent ="mouseLeave";
}
canvas.addEventListener("mouseup", my_mouseUp);
function my_mouseUp(e){
    mouseEvent ="mouseup";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mouseLeave(e){
current_position_of_mouse_x = e.clientX-canvas.offsetLeft;
current_position_of_mouse_y = e.clientY-canvas.offsetTop;
if (mouseEvent == "mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth =widthofline;

        console.log("last_position_of_x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);


        console.log("last_position_of_x and y coordinates = ");
        console.log("x = " + current_position_of_x + "y = " + current_position_of_y);
        ctx.lineTo(current_position_of_mouse_x , current_position_of_mouse_y);
        ctx.stroke();
}
last_position_of_x =current_position_of_mouse_x;
last_position_of_y =current_position_of_mouse_y;

}
