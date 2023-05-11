const id = "is-gitflow-really-needed.md";
						const collection = "blog";
						const slug = "is-gitflow-really-needed";
						const body = "\nWhile I'm sure it can _probably_ be useful in certain situations, I don't like Gitflow and the ideas behind it. I think it's way too complex and that there are other easier solutions for a smoother workflow.\n\n## Preface - What is Gitflow?\n\n### Let's start by\n\nGitflow is a branching strategy that allows to split the development of a project by building `features` on isolated `branches`.\nThe idea is to checkout a branch everytime the development of a new feature starts.\n\nWhen the feature looks finished, the feature branch is merged on a `develop` branch which generally represents a specific - and entire - environment where the different features crosses and can be played altogether by anybody having access to the environment.\n\nWhen it's time to release a specific feature, a new `release` branch is checkout. QA folks are doing their best to verify the behaviour of the different features that have to be shipped and provide feeback to the dev team.\nThe developers are supposed to only make `hotfix` commits on these branches by checkout some `hotfix` branches and merge them directly inside the release branch.\n\nWhen everything looks good, the `hotfix` branch is merged back to `develop` so that it benefits from the different hotfixes and also in the `master` branch which is the \"production\" branch.\n\n![Graphical representation of the Gitflow](/blog/gitflow.png)\n\nIt's like a **5 tracks** race.\n\n## Why I don't like it?\n\nMy main concern about Gitflow is **complexity**.\n\n- How **much time** a feature takes to reach production?\n- How **complex** it is to deal with conflicts between 5 tracks AND long development time?\n- How **complex** it is to ramp up new folks to the concept?\n- How **hard** it is to fix something when there are differences between dev and prod environments?\n- How **stressing** it is on release day to ship N features that have been worked for the last couple of months? (I faced a similar situation where someone was \"the king of merging\")\n\n## What do people want?\n\n### The product folks want\n\n- Features that reach production at a given date (often the fastest right?)\n- Features that work\n- Quick bug fixes\n\n### The developer folks want\n\n- No stress at work\n- Building meaningful things and features that reach the end user\n- As less complexity as possible (who likes dealing with conflicts?)\n- Relaxed release day (if release days exist)\n\nFrom my perspectives, people using Gitflow are trying to solve these problems _ahead of time_ and in their development environment. They are trying to solve these problems at the `git` level.\nBut the thing is it's not a `git` problem. We don't have to solve it **only using git.**\n\n## An other possible approach\n\n### Let's tackle what the developer folks want\n\nInstead of having a 5 tracks situation, let's imagine a 2 tracks scenario where there would only be:\n\n- the `master` branch\n- the `develop` branch\n\nEverytime a developer has finished its task - even the smaller ones - they open a pull request **directly on master**.\n\nNow, let's say that everytime something is merged on `master`, it goes to production. Scary right? But it solves the developers problems:\n\n```diff\n- No stress at work\n+ You create a bug and fix it in less than 5mns IN PRODUCTION\n\n- Building meaningful things and features that reach the end user\n+ Everything you do goes to production: you create value on every merge\n\n- As less complexity as possible (who likes dealing with conflicts?)\n+ git checkout, open PR, merge on master, that's it\n\n- Relaxed release day (if release days exist)\n+ Which release day?\n```\n\n### Let's tackle what the product folks want\n\nWhat the product folks want is a working feature and a way to show that feature in production at a given moment (when it's finished for example).\n\nIf we use _what the developer folks want_, the product folks already have half their needs filled.\nThe thing is we don't have control on what we show to the user since the code is already in production and is available to the end user. So how can we deal with this issue?\n\nThere's one technic or practice called **Feature flagging** which is a way to conditionally show or hide some part of an application.\nThink of it like a light switch.\n\nLet's say you have a new feature in a React component and you want to show it only when it's ready:\n\n```jsx\nconst App = () => {\n  const flags = useFlags();\n\n  return (\n    <div>\n      {flags.newFeature ? <NewFeature /> : null}\n      <SomeOldComponnet />\n    </div>\n  );\n};\n```\n\nThe feature will only be available if the flag is activated.\n\nNow imagine that you could target some specific users, like your product folks for example, so that they have access to the feature _before_ the rest of the world and make verifications\n**directly in production**.\n\nLet's see how this solves the product folks problems:\n\n```diff\n- Features that reach production at a given date (often the fastest right?)\n+ They have control with the feature flag on who can see the feature or not when they want\n\n- Features that work\n+ They can verify earlier AND they can switch OFF the feature if it completely breaks for some reasons\n\n- Quick bug fixes\n+ Fixed by What the developers want\n```\n\n<br />\n\n## How to get there?\n\nThe first thing is to automate the deployment process.\n\nOnce the application can be deployed in a consistent way, often, it's time to think of a potential solution for feature flagging. If you need some runtime solutions (something that is real time), you can use <strong>Progressively</strong>.\n\nIf you don't really care adding an additional commit to switch a flag on, you can simply rely on environment variables. This is particularly useful for Statically Generated Site for example.\n";
						const data = {title:"Is Gitflow really needed?",publishedDate:new Date(1682985600000)};
						const _internal = {
							filePath: "/Users/marvin/soft/progressively/packages/website/src/content/blog/is-gitflow-really-needed.md",
							rawData: "\ntitle: Is Gitflow really needed?\npublishedDate: 2023-05-02",
						};

export { _internal, body, collection, data, id, slug };
