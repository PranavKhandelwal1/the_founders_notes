# Put Founders’ Notes on GitHub (and publish it free)

GitHub keeps a copy of your project and, with **GitHub Pages**, can also host it as a live website for free. You do not need to know code to follow this.

You need: a free account at github.com, and your `founders-notes` folder.

---

## Route A: no command line (easiest)

Use **GitHub Desktop**, a free app from desktop.github.com.

1. Install GitHub Desktop and sign in with your GitHub account.
2. Choose **File → Add local repository**, pick your `founders-notes` folder, and when it says it is not a repository, click **create a repository**. Keep the name `founders-notes`.
3. Write a short summary such as `First version`, then click **Commit to main**.
4. Click **Publish repository**. **Untick “Keep this code private”** (free GitHub Pages needs a public repository), then publish.

From now on, every time you change something (a new story, a new photo): open GitHub Desktop, write a one-line summary, click **Commit to main**, then **Push origin**.

## Route B: command line

Install Git (git-scm.com), then in a terminal:

```
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

cd founders-notes
git init -b main
git add .
git commit -m "First version of Founders' Notes"
```

On github.com click **New repository**, name it `founders-notes`, keep it **Public**, do not add a README, and create it. Then run the two commands GitHub shows you, which look like this:

```
git remote add origin https://github.com/YOUR-USERNAME/founders-notes.git
git push -u origin main
```

GitHub asks you to sign in the first time. The simplest way is the GitHub CLI: install it, run `gh auth login`, and follow the prompts.

For every later change:

```
git add .
git commit -m "Add story: Business Name"
git push
```

---

## Turn it into a live website (GitHub Pages)

1. On github.com open your repository, then **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**, **Branch** to `main`, folder `/ (root)`, and click **Save**.
3. Wait a minute or two. The page shows your site address, usually `https://YOUR-USERNAME.github.io/founders-notes/`.

Every push you make after this updates the live site within a minute or two.

### Use your own domain

1. Buy the domain (see section 4 of `HOW-TO.md`).
2. In **Settings → Pages → Custom domain**, type your domain (for example `foundersnotes.com`) and save.
3. At your domain registrar, open the DNS settings and add the records GitHub lists in its guide “Managing a custom domain for your GitHub Pages site” (search for that title). In short: four `A` records for the main domain pointing to GitHub’s addresses, and a `CNAME` record for `www` pointing to `YOUR-USERNAME.github.io`. Check the current addresses in GitHub’s guide rather than copying them from anywhere else.
4. When GitHub shows the domain as verified, tick **Enforce HTTPS**. DNS changes can take from a few minutes to a day.

### Replace the placeholder domain (important)

Four files contain the text `YOUR-DOMAIN.com`: `index.html`, `privacy.html`, `sitemap.xml` and `robots.txt`. They need your real address so that links shared on Instagram and WhatsApp show your preview picture, and so Google finds your pages.

In VS Code: **Edit → Replace in Files** (Ctrl+Shift+H, or Cmd+Shift+H on a Mac), search for `YOUR-DOMAIN.com`, replace it with your domain (for example `foundersnotes.com`, or `www.foundersnotes.com` if that is the address you use), and replace all. Then commit and push.

If you publish on the `github.io` address first, use `YOUR-USERNAME.github.io/founders-notes` instead of a domain, but note that the custom 404 page only works properly on a domain or on a repository named exactly `YOUR-USERNAME.github.io`.

---

## Things to know

- **Public repository means public files.** Everything in the folder can be read by anyone, including the email address and WhatsApp number in `data/config.js`, which are on the website anyway. **Never commit** founders’ written approvals, screenshots of messages, or anything private. Keep those in a separate private folder.
- **Photos:** only add photos you have permission to use.
- **Undoing a mistake:** every commit is saved, so you can always go back to an earlier version.
- **Other free hosts:** if you would rather not use GitHub Pages, Netlify and Cloudflare Pages can connect to the same repository and publish it automatically.
