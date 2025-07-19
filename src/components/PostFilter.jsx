import { useState, useEffect } from "react";
import "./PostFilter.css"
import { FiSearch } from "react-icons/fi";

function PostFilter({ setList, setCurrentPage, originalList, categories, tags }) {
   
    const [searchInput, setSearchInput] = useState(""); 
  const handleClick = () => {
    if (!searchInput.trim()) {
      alert("Vui lòng nhập bài viết cần tìm!");
      return;
    }
    setSearchKeywords(searchInput.trim());
    setSearchInput(""); // reset input
  };
  const [isOpenTag, setIsOpenTag] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchKeywords, setSearchKeywords] = useState("");
  useEffect(() => {
    let filtered = originalList;

    // Lọc theo từ khóa tìm kiếm
    if (searchKeywords.trim()) {
      const keywords = searchKeywords.toLowerCase().split(/\s+/);
      filtered = filtered.filter((post) =>
        keywords.every((kw) => post.title.toLowerCase().includes(kw))
      );
    }

    // Lọc theo danh mục
    if (selectedCategory !== "") {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }

    // Lọc theo tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter((post) =>
        selectedTags.every((tag) => post.tags.includes(tag))
      );
    }

    setList(filtered);
    setCurrentPage(1); // reset về page đầu khi lọc
  }, [searchKeywords, selectedCategory, selectedTags, originalList]);

    const handleClearFilters = () => {
      setSearchInput("");
      setSearchKeywords("");
      setSelectedCategory("");
      setSelectedTags([]);
    };

  return (
    <div className="search-filter-bar">
      <div className="filter-top">
        <input
          type="text"
          placeholder="Tìm kiếm..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key.toLowerCase() === "enter") {
              e.preventDefault();
              handleClick();
            }
          }}
        ></input>
        <button onClick={handleClick}>
          <FiSearch style={{ marginRight: "4px" }} /> Search
        </button>
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
        >
          <option value="" disabled>
            Chọn danh mục
          </option>
          {categories.map((category, idx) => (
            <option key={idx} value={category}>
              {category}
            </option>
          ))}
        </select>
        <span
          className="dropdown-header"
          onClick={() => setIsOpenTag(!isOpenTag)}
        >
          Tag
        </span>

        <button onClick={handleClearFilters}>Hủy</button>
      </div>

      <div className="tag-section">
        <div className="tag-dropdown">
          {isOpenTag &&
            tags.map((tag, idx) => (
              <label key={idx}>
                <input
                  type="checkbox"
                  value={tag}
                  checked={selectedTags.includes(tag)}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    const value = e.target.value;

                    setSelectedTags((prev) =>
                      checked
                        ? [...prev, value]
                        : prev.filter((t) => t !== value)
                    );
                  }}
                />
                {tag}
              </label>
            ))}
        </div>
      </div>
    </div>
  );
}
export default PostFilter;