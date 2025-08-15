// Initialize font properties
const fontname = "Roboto+Mono";
const fontweights = [300, 400]

// Color properties - Dark Theme
const basecolor = "#f0f0f0";
const accentcolor = "#4a9eff";
const highlightcolor = "#ffffff";

// Body properties
const bodyfontweight = 300;
const bodyfontsize = "16px";
const backgroundcolor = "#1a1a1a";

// Link properties
const acolor = accentcolor;
const adecoration = "none";

// Menu properties
const menucolor = basecolor;
const menufontsize = "14px";
const menudecoration = "none";

// Header properties
const headercolor = accentcolor;
const headerfontsize = "32px";
const headerdecoration = "none";
const namecolor = highlightcolor;
const namefontsize = "28px";

// Publication properties
const ptitlecolor = accentcolor;
const ptitlefontsize = bodyfontsize;
const ptitleweight = bodyfontweight;
const ptitledecoration = "none";
const ptitlestyle = "normal";

const authorcolor = accentcolor;
const authorweight = bodyfontweight;
const authordecoration = "none";
const authorstyle = "normal";

const selfcolor = highlightcolor;
const selfweight = bodyfontweight;
const selfdecoration = "none";
const selfstyle = "normal";

const tagcolor = accentcolor;
const tagweight = bodyfontweight;
const tagdecoration = "none";
const tagstyle = "normal";

const insttitlecolor = highlightcolor;
const insttitlesize = "12px";
const instyearcolor = accentcolor;
const instyearsize = "11px";

// Load Google Fonts
$("head").append("<link href='https://fonts.googleapis.com/css2?family=" + fontname + ":wght@" + fontweights.join(';') + "&display=swap' rel='stylesheet' type='text/css'>");

// Apply body styles
$("body").css("font-family", fontname);
$("body").css("color", basecolor);
$("body").css("font-weight", bodyfontweight);
$("body").css("font-size", bodyfontsize);
$("body").css("background-color", backgroundcolor);

// Apply link styles
$("a").css("color", acolor);
$("a").css("text-decoration", adecoration);

// Apply menu link styles
$(".menulink").css("color", menucolor);
$(".menulink").css("font-size", menufontsize);
$(".menulink").css("text-decoration", menudecoration);

// Apply header styles
$(".header").css("color", headercolor);
$(".header").css("font-size", headerfontsize);
$(".header").css("text-decoration", headerdecoration);

// Apply name styles
$(".name").css("color", namecolor);
$(".name").css("font-size", namefontsize);
$(".name").css("margin-left", "0px");

// Apply paper title styles
$(".papertitle").css("color", ptitlecolor);
$(".papertitle").css("font-size", ptitlefontsize);
$(".papertitle").css("font-weight", ptitleweight);
$(".papertitle").css("text-decoration", ptitledecoration);
$(".papertitle").css("font-style", ptitlestyle);

// Apply author styles
$(".thisauthor").css("color", selfcolor);
$(".thisauthor").css("font-weight", selfweight);
$(".thisauthor").css("text-decoration", selfdecoration);
$(".thisauthor").css("font-style", selfstyle);

// Apply institution styles
$(".institution").css("color", insttitlecolor);
$(".institution").css("font-size", insttitlesize);
$(".years").css("color", instyearcolor);
$(".years").css("font-size", instyearsize);

// --- RECTIFIED: Theme Toggle Functionality ---
$(document).ready(function() {
    const themeToggle = $('#themeToggle');
    const body = $('body');
    const sunIcon = themeToggle.find('.sun-icon');
    const moonIcon = themeToggle.find('.moon-icon');

    // Function to set the theme based on the 'theme' parameter ('light' or 'dark')
    function applyTheme(theme) {
        if (theme === 'light') {
            body.addClass('light-theme');
            sunIcon.hide(); // Hide sun icon
            moonIcon.show(); // Show moon icon
        } else {
            body.removeClass('light-theme');
            sunIcon.show(); // Show sun icon
            moonIcon.hide(); // Hide moon icon
        }
    }

    // 1. Check localStorage and apply the saved theme on page load
    const savedTheme = localStorage.getItem('theme') || 'dark'; // Default to dark
    applyTheme(savedTheme);

    // 2. Set up the click event handler for the toggle button
    themeToggle.on('click', function() {
        // REMOVED the setTimeout delay for an instant switch
        const newTheme = body.hasClass('light-theme') ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    });
});
