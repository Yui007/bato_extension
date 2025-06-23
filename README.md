# Bato Manga Downloader Extension

![Bato.to Manga Downloader Banner](original.png)

A sleek and efficient Chrome extension to download manga chapters and series directly from Bato.to. This extension provides a seamless experience for archiving your favorite manga, with options to download individual chapters, entire series, or a specific range of chapters.

## ✨ Features

- **Download Current Chapter**: Quickly download the chapter you are currently viewing.
- **Download Entire Series**: Download all available chapters for a manga series with a single click.
- **Download Chapter Range**: Specify a range of chapters to download, perfect for catching up on specific arcs.
- **Modern UI**: A clean, intuitive, and animated user interface for a delightful experience.
- **Manifest V3 Compliant**: Built with the latest Chrome extension manifest version for enhanced security and performance.

## 🚀 Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/Yui007/bato_extension.git
    ```
2.  **Open Chrome Extensions**:
    -   Open Chrome and navigate to `chrome://extensions/`.
    -   Alternatively, click the three-dot menu -> More tools -> Extensions.
3.  **Enable Developer Mode**:
    -   Toggle on "Developer mode" in the top right corner.
4.  **Load Unpacked**:
    -   Click the "Load unpacked" button.
    -   Select the cloned `bato_extension` directory.
5.  **Pin the Extension**:
    -   Click the puzzle piece icon next to your profile avatar.
    -   Pin "Bato Manga Downloader" for easy access.

## 📖 How to Use

1.  **Navigate to Bato.to**: Go to any manga series or chapter page on [Bato.to](https://bato.to/).
2.  **Open the Extension Popup**: Click on the Bato.to Manga Downloader icon in your browser toolbar.
3.  **Choose Your Download Option**:
    -   **Download Current Chapter**: Clicks this button to download the chapter you are currently viewing.
    -   **Download Series**: Clicks this button to download all chapters of the current series.
    -   **Download Range**: Enter the starting and ending chapter numbers in the provided fields and click "Download Range" to download chapters within that specific range.

## 🛠️ Development

### Technologies Used

-   **HTML**: For the popup structure.
-   **CSS**: For styling and animations (modern, sleek design).
-   **JavaScript**: For extension logic, communication with content scripts, and download management.

### Project Structure

```
bato_extension/
├── background.js         # Handles background tasks and download requests
├── content.js            # Injects into Bato.to pages to extract chapter data
├── manifest.json         # Extension manifest file (Manifest V3)
├── popup.html            # The HTML structure for the extension popup
├── popup.js              # JavaScript for the popup's functionality
├── popup.css             # Styles for the extension popup
├── original.png          # Extension banner image
├── README.md             # This README file
└── icon/                 # Extension icons in various sizes
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements, new features, or bug fixes, please feel free to:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/YourFeature`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add new feature'`).
5.  Push to the branch (`git push origin feature/YourFeature`).
6.  Open a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

-   [Bato.to](https://bato.to/) for providing an amazing platform for manga readers.
-   The open-source community for countless resources and inspiration.
