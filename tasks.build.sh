#!/bin/bash
if [ "$TRAVIS_BRANCH" == "master" ]; then
	npm run build
	echo "build tasks"
else
 echo 'this is not master branch. Skipping tasks build...'
fi
