# Git

### Installing

Linux: Use your package manager\
macOS: https://git-scm.com/download/mac\
Windows: https://git-scm.com/download/win

### The shell

A very powerful way of interacting with your computer. While there are a few GUI's for git, the shell interface is the most powerful and most widely used.

Try some of these commands:

```shell
echo "Hello World"
pwd
ls
```

### Making our first repository

First, let's make a directory using the shell.

```shell
mkdir test-repo # create a directory
file test-repo  # check if the directory exists
cd test-repo    # change the current directory
pwd             # see the current directory
```

Now lets make it a git repository!

```shell
git init
```

### First commit

Add some plain text files (.txt) to the directory any way you'd like.

Using git status we can see there are untracked files

```shell
git status
```

Now stage all files using `git add .` or stage a specific file using `git add FILENAME`.

`git status` now says there are changes ready to be committed.

When we commit we have to add a message describing the changes.

```shell
git commit -m "Added txt files"
```

We can view a list of commits by using `git log`.

Our commit is uniquely identified by a long hexadecimal number known as the hash, ex: `478ac7ec68f4b0b525fcb9e37a9909d4cac24000`.

Notice how git log shows `HEAD` and `master` next to the latest commit? We can reference this commit using either the hash, `HEAD`, or `master`. (Note: In the future `master` is to be replaced with a different, customizable term. `main` seems to be a popular alternative)

We can view a specific commit using `git show <object>`. The object can be a descriptor we found in `git log` (like `HEAD` or `master`), a hash, or a few other things.

### Second commit

Make some changes to the text files.

We can see the changes that have been made since the last commit by using `git diff`.

Let's stage some changes using `git add`.

We can see our stages changes using `git diff --cached`

Commit your changes using `git commit -m "Changed some files"`

Now `git log` shows two commits!

Again we can look at each commit using `git show HASH`.

`git show` also accepts relative references. We can look at the commit that is 1 before HEAD if we do `git show HEAD~1`

### Git checkout

We can use `git checkout <object>` to view the repository in that state.

If we run `git checkout HEAD~1` we can view the state of the repository in the state it was after the first commit. The changes you made in your second commit are not present.

Running `git status` tells us our HEAD is detached! We are in a "detached HEAD" state.

I would encourage you not to commit or do any work in this state until you are more familiar with git.

To get back to our latest changes type `git checkout master`.

### Branches

You should be comfortable with the previous material before this step. If you simply want to version control some homework assignments, you don't need to know branches. However, a lot of collaborative workflows using git are done with branching.

Running `git branch --list` will show us all the current branches.

Notice that the `master` we were talking about earlier is the branch name.

We can create a new branch by running `git branch test-branch`.

Now `git branch --list` will show two branches.

To switch between branches, simply use the checkout command like this: `git checkout test-branch` or `git checkout master`

`git branch --list` shows an asterisk next to the current branch.

### Merging

Merging happens when two branches have diverged and you want to combine them.

For example: your friend does some work on a branch called `implement-feature-A` and you've been working on a branch called `implement-feature-B`. Both of you have been committing changes to your branch but now you want to bring all the changes together. You want to "merge" your changes.

In the previous step, we made an extra branch so we already have 2. Using everything you've already learned, make some commits on both of those branches.

Running `git merge BRANCH-NAME` will attempt to apply all the changes from the other branch onto the current branch.

#### Merge conflicts

TODO
