#!/bin/bash
CODE_DIR=$1
if [ -z "$CODE_DIR" ]; then
  CODE_DIR='41SLSP_RZS-VU??'
fi

VIEWS="41SLSP_RZS-VU06 41SLSP_RZS-VU07 41SLSP_RZS-VU15"
OS=$(uname -s)

for VIEW in $VIEWS; do
  echo "Packaging $VIEW"
  if [ -e "./package/$VIEW.zip" ]; then
    rm ./package/$VIEW.zip
  fi

  if [ -e "./tmpPackage" ]; then
    rm -Rf "./tmpPackage"
  fi

  mkdir -p "./tmpPackage/$VIEW"
  cd "./tmpPackage"
  cp -rp ../resources/general/* ./$VIEW
  cp -rp ../resources/$VIEW/* ./$VIEW
  if [ ! -e "./$VIEW/js" ]; then
    mkdir ./$VIEW/js
  fi
  #TODO: make dynamic
  cp -rp ../dist/$CODE_DIR/js/custom.js ./$VIEW/js
  
  find . -name '.DS_Store' -exec rm -f {} \;

  if [ "$OS" = "Darwin" ]; then
    COPYFILE_DISABLE=1 zip -q -r ../package/$VIEW.zip ./$VIEW
  else
    zip -q -r ../package/$VIEW.zip ./$VIEW
  fi

  cd -
  rm -Rf "./tmpPackage"
done
