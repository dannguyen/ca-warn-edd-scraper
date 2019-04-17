# TODOS


## Actual work

- [ ] Run `poetry new ca-warn-edd`
- [ ] Copy .gitignore
- [ ] Create samples/
    - [ ] wget site

        https://github.com/wgetsnaps/ca-dmv-autonomous-vehicle-accidents
        
        ```sh
        mkdir -p samples/mirror
        cd samples/mirror
        wget --recursive --level 1 \
              --adjust-extension \
              --convert-links \
              --html-extension \
              --no-check-certificate \
              --no-host-directories \
              --no-parent \
              --page-requisites \
              --output-file /dev/stdout \
              https://www.edd.ca.gov/jobs_and_training/Layoff_Services_WARN.htm \
              | tee ./wget.log
        mv jobs_and_training/ site/
        cp site/Layoff_Services_WARN.htm site/index.html
        ```

- Create a manifest of the live site (site-inventory.csv)
- Work on HTML scraper
- Work on PDF scraper
- Devise format-version description (e.g. '2014-style')
