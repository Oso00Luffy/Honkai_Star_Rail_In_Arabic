import { Link } from "react-router";

// Component imports
import Image from "custom/Image";
import { Text, TextStyled } from "styled/StyledTypography";

// MUI imports
import { useTheme, Stack, Button, getContrastRatio } from "@mui/material";

function PageNotFound() {
    const documentTitle = `Honkai: Star Rail - هونكاي العرب`;
    const documentDesc = `The Honkai: Star Rail Arabic community website.`;
    document.title = documentTitle;
    document
        .querySelector('meta[property="og:title"]')
        ?.setAttribute("content", documentTitle);
    document
        .querySelector('meta[property="description"]')
        ?.setAttribute("content", documentDesc);
    document
        .querySelector('meta[property="og:description"]')
        ?.setAttribute("content", documentDesc);

    const theme = useTheme();

    return (
        <Stack alignItems="center" spacing={2}>
            <Image
                src="emotes/Pom-Pom_16"
                alt="404"
                style={{ width: "256px" }}
            />
            <TextStyled variant="h4-styled">404</TextStyled>
            <Text variant="h4">
                The page you were looking for was not found.
            </Text>
            <Button component={Link} to="/" variant="contained">
                <TextStyled
                    variant="h6-styled"
                    sx={{
                        color:
                            getContrastRatio(
                                theme.palette.primary.main,
                                theme.text.primary
                            ) > 4.5
                                ? theme.text.primary
                                : theme.text.contrast,
                    }}
                >
                    Back to Home
                </TextStyled>
            </Button>
        </Stack>
    );
}

export default PageNotFound;
