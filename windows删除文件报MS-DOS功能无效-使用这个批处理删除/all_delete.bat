@ECHO OFF
CLS
color 0a
echo ȷ��Ҫ����ɾ����?���������ʼɾ����
pause >nul
taskkill /f /im explorer.exe>nul
echo y|Cacls %* /t /e /c /g Everyone:f >nul
DEL /F /A /Q \\?\%1 
RD /S /Q \\?\%1 
start %windir%\explorer.exe
exit