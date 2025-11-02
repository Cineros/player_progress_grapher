import searchLogo from './search.svg'
const AutoSearchBar  = ({query, setQuery}) => {
    return (
      <div
        style={{
          padding: "4px",
          borderRadius: "4px",
          border: "2px #777777ff",
          backgroundColor: "#4d4d4dff",
          borderStyle: "inset",
          height: "auto",
          width: "auto",
          display: "flex",
          justifyContent: "start",
          gap: "0.5em",
          alignItems: "center",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Add this line for box shadow
        }}
      >

        <img src={searchLogo} alt="looking-glass" height={18} width={18} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            width: "100%",
            border: 'none',
            zIndex: "1",
            height: "auto",
            backgroundColor: "#474747",
          }}
        />
      </div>
    );
  }
export default AutoSearchBar