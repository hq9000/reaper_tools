desc: MIDI Copy to channels (useful for layering with multitembral synths)
//tags: MIDI processing

// this plugin is usable for 

slider1:0<0,1,1{No,Yes ######}>Copy to ch. #1
slider2:0<0,1,1{No,Yes ######}>Copy to ch. #2
slider3:0<0,1,1{No,Yes ######}>Copy to ch. #3
slider4:0<0,1,1{No,Yes ######}>Copy to ch. #4
slider5:0<0,1,1{No,Yes ######}>Copy to ch. #5
slider6:0<0,1,1{No,Yes ######}>Copy to ch. #6 
slider7:0<0,1,1{No,Yes ######}>Copy to ch. #7
slider8:0<0,1,1{No,Yes ######}>Copy to ch. #8
slider9:0<0,1,1{No,Yes ######}>Copy to ch. #9
slider10:0<0,1,1{No,Yes ######}>Copy to ch. #10
slider11:0<0,1,1{No,Yes ######}>Copy to ch. #11
slider12:0<0,1,1{No,Yes ######}>Copy to ch. #12
slider13:0<0,1,1{No,Yes ######}>Copy to ch. #13
slider14:0<0,1,1{No,Yes ######}>Copy to ch. #14 
slider15:0<0,1,1{No,Yes ######}>Copy to ch. #15
slider16:0<0,1,1{No,Yes ######}>Copy to ch. #16 

in_pin:none
out_pin:none

@init 

function is_voice_message(message) (
    (message & 0xF0) >= 0x80 && (message & 0xF0) <= 0xF0;
);

function send_copy_of_voice_message(offset, msg1, msg2, msg3, target_channel) (
   midisend(offset, msg1 | (target_channel-1), msg2, msg3);
)

@slider 

@block

while (midirecv(offset, msg1, msg2, msg3)) (
  
  num_yes_no_sliders = 3;
   
  is_voice_message(msg1) ? (
    slider1 ? send_copy_of_voice_message(offset, msg1, msg2, msg3, 1);
    slider2 ? send_copy_of_voice_message(offset, msg1, msg2, msg3, 2);
    slider3 ? send_copy_of_voice_message(offset, msg1, msg2, msg3, 3);
    slider4 ? send_copy_of_voice_message(offset, msg1, msg2, msg3, 4);
    slider5 ? send_copy_of_voice_message(offset, msg1, msg2, msg3, 5);
    slider6 ? send_copy_of_voice_message(offset, msg1, msg2, msg3, 6);
    slider7 ? send_copy_of_voice_message(offset, msg1, msg2, msg3, 7);
    slider8 ? send_copy_of_voice_message(offset, msg1, msg2, msg3, 8);
    slider9 ? send_copy_of_voice_message(offset, msg1, msg2, msg3, 9);
    slider10 ? send_copy_of_voice_message(offset, msg1, msg2, msg3, 10);
    slider11 ? send_copy_of_voice_message(offset, msg1, msg2, msg3, 11);
    slider12 ? send_copy_of_voice_message(offset, msg1, msg2, msg3, 12);
    slider13 ? send_copy_of_voice_message(offset, msg1, msg2, msg3, 13);
    slider14 ? send_copy_of_voice_message(offset, msg1, msg2, msg3, 14);
    slider15 ? send_copy_of_voice_message(offset, msg1, msg2, msg3, 15);
    slider16 ? send_copy_of_voice_message(offset, msg1, msg2, msg3, 16); 
  ) : (
     // non-voice messages are passed as they are
     midisend(offset, msg1, msg2, msg3);  
  ) 
);

@sample