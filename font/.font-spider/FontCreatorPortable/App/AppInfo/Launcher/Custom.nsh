${SegmentFile}

${SegmentPreExecPrimary}
	ExecWait '"$SYSDIR\RegSvr32.exe" /S "$AppDirectory\FontCreator\FontInstaller.dll"'
	ExecWait '"$SYSDIR\RegSvr32.exe" /S "$AppDirectory\FontCreator\FontCreatorExt.dll"'
!macroend

${SegmentPostExecPrimary}
	ExecWait '"$SYSDIR\RegSvr32.exe" /S /U "$AppDirectory\FontCreator\FontInstaller.dll"'
	ExecWait '"$SYSDIR\RegSvr32.exe" /S /U "$AppDirectory\FontCreator\FontCreatorExt.dll"'
!macroend