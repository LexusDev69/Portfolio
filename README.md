# LexusDev69 Portfolio

This is a static portfolio website for LexusDev69 designed for GitHub Pages deployment.

## 1. Edit your name, introduction, and general content

Open the following file and update the text inside the page sections:

- `index.html`

You can change:
- the name "LexusDev69"
- the title "Aspiring Software Developer | IT Student"
- the introduction paragraph
- project descriptions
- resume text
- contact section details

## 2. Configure social media URLs

Open `script.js` and update the `config` object near the top:

```js
const config = {
  github: 'https://github.com/LexusDev69',
  linkedin: 'https://www.linkedin.com/in/rudolf-mateo-203248428/',
  facebook: '',
  instagram: '',
  email: 'your.email@example.com',
  resume: 'assets/resume/resume.pdf',
  resumeLabel: 'To be updated',
};
```

- Leave `facebook` or `instagram` blank if you do not have a profile URL yet.
- Add your email address in the `email` field.
- Use real public URLs only.

## 3. Add or replace your profile photo

The portfolio currently uses a placeholder image in:

- `assets/images/profile-placeholder.svg`

To replace it with your photo:

1. Add your image file in the same folder.
2. Name it `profile.jpg` or choose a supported image format.
3. Update the image path in `index.html`.

Example:

```html
<img src="assets/images/profile.jpg" alt="LexusDev69 profile photo" />
```

If the folder is empty right now, the page will still display the placeholder until you add your photo.

## 4. Add your resume PDF

The portfolio expects the resume file at:

- `assets/resume/resume.pdf`

Place your actual PDF there before sharing the website.

If the file is missing, the resume buttons will still be visible, but the PDF preview will show a fallback message until the file is added.

## 5. Update project descriptions and repository links

You can edit the project card content directly in `index.html`.

Each project card includes:
- project title
- short description
- technology tags
- status label
- repository link
- live demo placeholder

If a project is not yet live or published, the project link should remain pointed to your GitHub profile until you confirm a real repository or deployment URL.

## 6. Preview the website locally

From the project folder, run:

```bash
python -m http.server 8000
```

Then open:

- http://localhost:8000

This works without any build step or backend.

## 7. Upload to a public GitHub repository

1. Create a new public repository on GitHub.
2. Push the contents of this project folder to the repository.
3. Make sure the files are at the root of the repository.
4. Do not place the project inside a nested folder unless you also update the GitHub Pages URL structure.

Example repository structure:

```text
index.html
style.css
script.js
README.md
.nojekyll
assets/
```

## 8. Enable GitHub Pages

In your GitHub repository:

1. Go to Settings.
2. Open Pages.
3. Select the main branch.
4. Set the folder to `/root` or `/` depending on your repository layout.
5. Save the settings.

Your site will be published at:

- https://lexusdev69.github.io/lexusdev69-portfolio/

If the repository name differs, update the final URL accordingly.

## 9. Troubleshooting deployment, broken assets, and paths

If the website does not load correctly:

- Make sure the HTML, CSS, and JS files are in the project root.
- Check that all links use relative paths like `assets/...`.
- Confirm your image and resume files exist in the expected folders.
- Ensure `.nojekyll` exists to prevent Jekyll processing.
- Clear your browser cache if changes do not appear after deployment.
- Use the browser developer tools to inspect missing 404 errors.

Common issues:

- broken image: wrong file path or file missing
- resume not showing: PDF path is incorrect or file not added
- navigation not scrolling: anchor IDs do not match section IDs
- dark mode not appearing: JS failed to load or localStorage is blocked

## 10. Security reminder

This portfolio is public-facing. Do not include:
- passwords
- API keys
- private tokens
- confidential project data
- personal identifiers

Only publish the contact information you explicitly want to share.

## 11. Local static deployment summary

This portfolio is intentionally simple and does not require:
- Node.js
- a build step
- a backend server
- a database
- paid services

It is designed to run as a static website on GitHub Pages.
