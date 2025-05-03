#!/bin/bash

# Find the line number where the section to remove starts
START_LINE=$(grep -n "\/\* Remove the variable-based colors and restore original colors \*\/" app/globals.css | cut -d ':' -f 1)

# Find the line number where the section to remove ends
END_LINE=$(grep -n "\/\* Microinteractions & Animations \*\/" app/globals.css | cut -d ':' -f 1)

# Use sed to remove the lines in between
sed -i.bak -e "${START_LINE},${END_LINE}d" app/globals.css

# Insert the new section header at the appropriate location
sed -i.bak -e "${START_LINE}i\\
/* Microinteractions & Animations */" app/globals.css

# Clean up the backup file
rm app/globals.css.bak

echo "Fixed app/globals.css by removing hardcoded color overrides." 