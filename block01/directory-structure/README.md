# Directory Structure

## Instructions

1. Choose one person in your group to share their screen. They will be in charge of typing your answers.
2. Select another person in the group to be responsible for sharing your answers with the class later on.
3. As a team, read each question out loud and reach a consensus on the answer before moving to the next question.

> [!TIP]
> 
> New vocabulary words are **bolded**. Use context clues to make an educated guess about their definitions!

## Files and Folders

```
kitchen/
├── fridge/
│   ├── banana.frt
│   └── celery.veg
└── pantry/
    └── snacks/
        ├── pretzels.bag
        ├── chips.bag
        └── popcorn.bag
```

1. A **child** is contained in its **parent** directory. For example, `snacks/` is a child of `pantry/`. What is the parent of `fridge/`?
2. Which folder is the parent of `celery.veg`?
3. List the children of `snacks/`.
4. List the **siblings** of `chips.bag`.
5. Each file has a **file extension**, a suffix that identifies what kind of file it is. For example, the file extension of `banana.frt` is `frt`. What is the file extension of `popcorn.bag`?
6. What _symbol_ is used to denote that a name refers to a folder, rather than a file?
7. Describe the difference between a file and a folder.

## Relative Paths

```
town/
├── general.store
├── great_forest/
│   ├── pine.tree
│   └── barn.owl
└── tall_mountains/
    ├── dark_cave/
    │   └── earth.worm
    └── mountain.goat
```

You can also think of a directory structure as a map. With this model, each folder represents a location, and its children are the things and places accessible from that location.

For example, when you're in `town/`, you can go to the `general.store`, or travel to the `great_forest/`.

If you're in the `dark_cave/` and you want to go back to `town/`, then you must first go through the `tall_mountains/`.

1. What tree can you find in the `great_forest/`?
2. Where is the `mountain.goat`?
3. What directions would you give to someone in `town/` if they want to see the `earth.worm`?
4. Describe how you would get from `great_forest/` to `tall_mountains/`.
5. Describe how you would get from `dark_cave/` to `town/`.
6. A **relative path** starts from where you are, and uses `..` to represent going "back" or "up" the directory tree.\
   For example, to get from `great_forest/` to the `general.store`, you first have to go _back_ to `town/`. Thus the relative path is `../general.store`.\
   What is the relative path:
   1. from `great_forest/` to `tall_mountains/`?
   2. from `dark_cave/` to `barn.owl`?
   3. from `town/` to `earth.worm`?

## Absolute Paths

```
/
├── photos/
│   ├── selfie.jpg
│   └── pets/
│       ├── cat_eating.png
│       ├── cat_napping.jpg
│       └── puppy_playing_fetch.jpg
├── music/
│   └── theme_song.mp3
├── documents/
│   ├── resume.pdf
│   └── tax/
│       └── 1040.pdf
└── desktop/
    ├── screenshot_172.png
    └── coursework/
        ├── block01/
        │   └── README.md
        └── block02/
            └── README.md
```

1. The **root** directory is the folder that contains all other folders. What symbol is used to denote the root?
2. An **absolute path** is a path that starts at the root. For example, the absolute path to `selfie.jpg` is `/photos/selfie.jpg`.\
   What is the absolute path of:
   1. `pets/`
   2. `theme_song.mp3`
   3. `1040.pdf`
   4. `coursework/`
3. What **syntax** (or symbol) denotes that a path is absolute?
4. Do absolute paths change depending on which directory you are in?
5. A file or folder's absolute path is _unique_, so it can be used to identify a specific file or folder. Why can't relative paths be used as a unique identifier?
6. What are the siblings of `desktop/`?
7. What is the relative path:
   1. from `pets/` to `coursework/`
   2. from `tax/` to `pets/`
   3. from `photos/` to `cat_napping.jpg`
   4. from `desktop/` to `1040.pdf`
   5. from `music/` to the `README.md` in `block01/`
