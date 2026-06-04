# The CEO Group — Website

A redesigned, static marketing website for **The CEO Group**, a 501(c)(3) non-profit uniting the chief executives of Cumberland County, New Jersey's leading employers around communication, education, and opportunity (est. 1996).

🔗 **Live site:** https://harkdigital.github.io/ceo-group-website/

## About

Built as a fast, dependency-free static site (HTML + CSS + vanilla JS) in The CEO Group's brand colors — red `#ED1C24`, near-black, and white. No build step is required; open `index.html` in a browser or serve the folder with any static file server.

## Pages

| File | Section |
|------|---------|
| `index.html` | Home |
| `about.html` | About Us |
| `officers.html` | Officers & Trustees |
| `members.html` | Members |
| `news.html` | In The News |
| `charities.html` | Charities |
| `speakers.html` | Guest Speakers |
| `photos.html` | Photo galleries (with lightbox) |
| `contact.html` | Contact |

## Structure

```
.
├── index.html + 8 subpages
└── assets/
    ├── css/style.css     # shared stylesheet
    ├── js/site.js        # shared behaviors + content data
    ├── img/              # logo, member/partner logos, photos
    └── photos/           # event gallery images
```

The shared header, footer, navigation, member wall, charitable-giving timeline, speaker roster, and photo galleries are driven from `assets/js/site.js`, so content updates happen in one place.

## Local preview

```bash
cd ceo-group-website
python3 -m http.server 4321
# open http://localhost:4321
```

## Notes

- The contact form is a front-end demo; connect it to an email/form service (e.g. Formspree, Netlify Forms) to go live.
- Member/partner logos are the trademarks of their respective owners; event photographs are credited to their photographers. Secure appropriate permissions before production use.
- News cards link to the original articles on theceogroup.org.

---

Redesign by [Hark.Digital](https://hark.digital).
