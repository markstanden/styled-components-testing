# PROJECT NAME

### WHAT THE PROJECT IS/DOES

#### Why have I made this?

- ?

#### Why react

-

#### What have I learned making this

- 

---

## How to install the dev environment locally:
#### I have tried to make the installation process as easy as possible, please let me know if this doesn't work for you!

---

**The rediculously easy way - if you use VSCode**

- Install the remote containers extension
- navigate to this folder (project root), then type:

  ```
  code .
  ```

- open the command palette (ctrl shift P on linux) and click reopen this folder in container

---

**To build the dev environment via CLI (even works on a different machine)**

- _the easy way:_
  ```
  (from the project root directory)
  chmod 755 docker-dev.sh
  sh ./dev-container-web.sh
  ```
- _or the slightly harder way:_

  ```
  (from the project root directory)
  docker build -t dev-container-web ./web
  ```

- _attaching the **\$PWD** as a volume mapped to **/app** & remove when finished_

  ```
  docker run -v $PWD/.:/app/.:z -p 1234:1234 -p 5678:5678 --rm dev-
  ```

- Now launch vscode and install remote container extension, bring up the command palette and attach to running container to get access to the extensions.

---

**or run locally**

- _install node_
  ```
  sudo apt install nodejs
  ```
- _or_
  ```
  sudo dnf install nodejs
  ```
- _then_
  ```
  npm install
  npm run start
  ```
  **(instructions are for linux, npm is available from `https:/npmjs.com` )**
- _install node_
  ```
  sudo apt install nodejs
  ```
- _or_
  ```
  sudo dnf install nodejs
  ```
- _then_
  ```
  npm install **or** yarn install
  npm run start **or** yarn start
  ```

