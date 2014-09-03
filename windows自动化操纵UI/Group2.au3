Local $k=0
WinActivate ("≤‚ ‘»∫2")
While $k<2
   MouseClick("left", 886, 448, 2)
   Send("This is some text.")
   MouseClick("left", 1009, 507, 2)
   $k=$k+1
WEnd
Exit