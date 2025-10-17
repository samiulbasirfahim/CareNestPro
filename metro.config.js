const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

module.exports = (async () => {
	const config = getDefaultConfig(__dirname);
	const { transformer, resolver } = config;

	config.transformer = {
		...transformer,
		babelTransformerPath: require.resolve(
			"react-native-svg-transformer/expo"
		),
	};

	config.resolver = {
		...resolver,
		assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
		sourceExts: [...resolver.sourceExts, "svg"],
	};

	config.transformer.babelTransformerPath = require.resolve(
		"react-native-svg-transformer"
	);
	config.resolver.assetExts = config.resolver.assetExts.filter(
		(ext) => ext !== "svg"
	);
	config.resolver.sourceExts.push("svg");

	return withNativeWind(config, { input: "./app/global.css" });
})();
