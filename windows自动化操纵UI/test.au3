Local $k=0
WinActivate ("bany")
While $k<5
   MouseClick("left", 858, 435, 2)
   Send("This is some text.")
   MouseClick("left", 1071, 505, 2)
   $k=$k+1
WEnd
Exit